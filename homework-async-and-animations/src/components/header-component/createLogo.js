import createElement from '../../helpers/createElement';

const createLogo = function headerLogo() {
  const logoContainer = createElement('div', 'chat__logoContainer');
  const logo = createElement('img', 'chat__logo');
  logo.setAttribute('alt', 'Logo');
  logo.setAttribute('src', './assets/icons/logo.svg');
  logoContainer.appendChild(logo);
  return logoContainer;
};

export default createLogo;
