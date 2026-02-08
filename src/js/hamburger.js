/*-----------------------------------------------
|   Hamburger
-----------------------------------------------*/

const hamburgerInit = () => {
	const Selector = {
		HAMBURGER: '.hamburger',
		NAVBAR_COLLAPSE: '#primaryNavbarCollapse'
	};

	const hamburger = document.querySelector(Selector.HAMBURGER);
	const navbarCollapse = document.querySelector(Selector.NAVBAR_COLLAPSE);

	if (hamburger) {
		navbarCollapse.addEventListener('show.bs.collapse', () => {
			hamburger.classList.add('is-active');
		});
	}

	if (hamburger) {
		navbarCollapse.addEventListener('hide.bs.collapse', () => {
			hamburger.classList.remove('is-active');
		});
	}
};

export default hamburgerInit;
