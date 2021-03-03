const formOrder = () => {
	const form = document.querySelector('.order__form'),
		inputName = document.querySelector('.input-name'),
		inputTel = document.querySelector('.input-tel'),
		helpText = document.createElement('div'),
		orderLabelName = document.querySelector('.order__label--name'),
		orderLabelTel = document.querySelector('.order__label--tel');

	helpText.classList.add('helpText');
	
	

	form.addEventListener('input', event => {
		const target = event.target;

		if (target.type === 'text') {
			target.value = target.value.replace(/[^А-яа-я ]/, '');
		}

		if (target.type === 'tel') {
			target.value = target.value.replace(/\D/, '');
		}
	})
	
	inputName.addEventListener('focus', () => {
		helpText.textContent = 'Пожалуйста введите Имя и Фамилию через пробел. Например, Иван Иванов';
		orderLabelName.append(helpText);
	});

	inputName.addEventListener('blur', () => {
		helpText.remove();
	})

	inputTel.addEventListener('focus', () => {
		helpText.textContent = 'Пожалуйста введите номер телефона, начиная с цифры 8';
		orderLabelTel.append(helpText);
	});

	inputTel.addEventListener('blur', () => {
		helpText.remove();
	})

};

export default formOrder;