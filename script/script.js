const nav_menu_features = document.getElementById('nav_menu_features');
const feature_arrow_down = document.getElementById('feature_arrow_down');
const feature_arrow_up = document.getElementById('feature_arrow_up');
const nav_menu_company = document.getElementById('nav_menu_company');
const company_arrow_down = document.getElementById('company_arrow_down');
const company_arrow_up = document.getElementById('company_arrow_up');
const features_menu = document.getElementById('features_menu');
const company_menu = document.getElementById('company_menu');
const burger_menu_open = document.getElementById('burger_menu_open');
const burger_menu_close = document.getElementById('burger_menu_close');
const burger_grey_shaddow = document.getElementById('burger_grey_shaddow');
const nav_menu = document.getElementById('nav_menu');

nav_menu_features.addEventListener('click', () => {
	feature_arrow_down.classList.toggle('invisible');
	feature_arrow_up.classList.toggle('invisible');
	features_menu.classList.toggle('invisible');
});

nav_menu_company.addEventListener('click', () => {
	company_arrow_down.classList.toggle('invisible');
	company_arrow_up.classList.toggle('invisible');
	company_menu.classList.toggle('invisible');
});

burger_menu_open.addEventListener('click', () => {
	if (burger_menu_close.style.display === "" || burger_menu_close.style.display === "none") {
		burger_menu_close.style.display = "flex";
		nav_menu.style.display = "block";
		burger_grey_shaddow.style.display = "flex";
	};
	
})

burger_menu_close.addEventListener('click', () => {
	if (burger_menu_close.style.display === "flex") {
		burger_menu_close.style.display = "none";
		nav_menu.style.display = "none";
		burger_grey_shaddow.style.display = "none";
	};
})