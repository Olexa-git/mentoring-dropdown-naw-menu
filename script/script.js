const nav_menu_features = document.getElementById('nav_menu_features');
const feature_arrow_down = document.getElementById('feature_arrow_down');
const feature_arrow_up = document.getElementById('feature_arrow_up');
const nav_menu_company = document.getElementById('nav_menu_company');
const company_arrow_down = document.getElementById('company_arrow_down');
const company_arrow_up = document.getElementById('company_arrow_up');

nav_menu_features.addEventListener('click', () => {
	feature_arrow_down.classList.toggle('invisible');
	feature_arrow_up.classList.toggle('invisible');
});

nav_menu_company.addEventListener('click', () => {
	company_arrow_down.classList.toggle('invisible');
	company_arrow_up.classList.toggle('invisible');
});