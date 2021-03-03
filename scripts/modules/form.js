const formOrder = () => {
	const form = document.querySelector('.order__form'),
		helpText = document.createElement('div'),
		orderLabelName = document.querySelector('.order__label--name'),
		orderLabelTel = document.querySelector('.order__label--tel');

	helpText.classList.add('helpText');

	form.addEventListener('input', event => {
		const target = event.target;

		if (target.type === 'text') {
			helpText.remove();
			target.value = target.value.replace(/[^А-яа-я ]/, '');
		}

		if (target.type === 'tel') {
			helpText.remove();
			target.value = target.value.replace(/\D/, '');
		}
	})

	form.addEventListener('focus', (event) => {
		const target = event.target

		if (target.type === 'text') {
			helpText.textContent = 'Пожалуйста введите Имя и Фамилию через пробел. Например, Иван Иванов';
			orderLabelName.append(helpText);
		}

		if (target.type === 'tel') {
			helpText.textContent = 'Пожалуйста введите номер телефона, начиная с цифры 8';
			orderLabelTel.append(helpText);
		}

		setTimeout(() => {
			helpText.remove();
		}, 2000)
	}, true)

};

export default formOrder;