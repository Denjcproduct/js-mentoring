import createElement from '../../helpers/createElement';

const createWelcomeButton = function welcomeButton() {
  const button = createElement('button', 'welcome__button');
  const buttonText = document.createTextNode('Войти');
  button.setAttribute('id', 'welcomeBtn');
  button.setAttribute('type', 'submit');
  button.appendChild(buttonText);
  return button;
};

export default createWelcomeButton;
