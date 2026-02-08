import utils from './utils';

/* -------------------------------------------------------------------------- */
/*                                  Count Up                                  */
/* -------------------------------------------------------------------------- */

const countupInit = () => {
	if (window.countUp) {
		const countups = document.querySelectorAll('[data-countup]');
		countups.forEach(node => {
			const { endValue, ...options } = utils.getData(node, 'countup');
			const fireCountUp = () => {
				const isInView = utils.isScrolledIntoView(node);
				if (isInView) {
					const countUp = new window.countUp.CountUp(node, endValue, {
						duration: 5,
						...options
					});
					if (!countUp.error) {
						countUp.start();
					} else {
						console.error(countUp.error);
					}

					window.removeEventListener('scroll', fireCountUp);
				}
			};

			window.addEventListener('scroll', fireCountUp);
		});
	}
};

export default countupInit;
