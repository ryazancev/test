const slider = () => {
	const
		slide = document.querySelectorAll('.reviews__block'),
		sliderContainer = document.querySelector('.reviews__silder');

	let currentSlide = 0, //Текущий слайд
		interval; //Интервал для setInterval

	const prevSlide = (elem, index, strClass) => {
		elem[index].classList.remove(strClass);
	};

	const nextSlide = (elem, index, strClass) => {
		elem[index].classList.add(strClass);
	};

	const autoPlaySlide = () => {
		prevSlide(slide, currentSlide, 'reviews__silder--active');

		currentSlide++;

		if (currentSlide >= slide.length) currentSlide = 0;

		nextSlide(slide, currentSlide, 'reviews__silder--active');
	};

	const startSlide = (time = 1500) => {
		interval = setInterval(autoPlaySlide, time);
	};

	const stopSlide = () => {
		clearInterval(interval);
	};

	startSlide();

	sliderContainer.addEventListener('click', event => {
		const target = event.target;

		event.preventDefault();

		if (!target.closest('.reviews__button')) return;

		prevSlide(slide, currentSlide, 'reviews__silder--active');

		if (target.closest('.reviews__button--next')) {
			currentSlide++;
		} else if (target.closest('.reviews__button--prev')) {
			currentSlide--;
		}

		if (currentSlide >= slide.length) currentSlide = 0;
		if (currentSlide < 0) currentSlide = slide.length - 1;

		nextSlide(slide, currentSlide, 'reviews__silder--active');
	});

	sliderContainer.addEventListener('mouseover', event => {
		if (event.target.closest('.reviews__button')) stopSlide();
	});

	sliderContainer.addEventListener('mouseout', event => {
		if (event.target.closest('.reviews__button')) startSlide();
	});
};

export default slider;