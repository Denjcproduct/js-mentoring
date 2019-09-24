import createElement from '../helpers/createElement';
import welcomeComponentLogic from './welcome-component-logic';

const createWelcomeWindow = function welcomeWindow() {
  const welcomeWindowContainer = createElement('div', 'welcome__container');
  const welcomeWindowButton = createElement('button', 'welcome__button');
  const welcomeWindowInput = createElement('input', 'welcome__input');
  const welcomeWindowLabel = createElement('label', 'welcome__label');
  const welcomeWindowText = document.createTextNode(
    'Добро пожаловать в чат, для пользования данным чатом введите ваше Имя',
  );
  const welcomeButtonText = document.createTextNode('Войти');
  const wrapper = document.querySelector('#app');
  welcomeWindowLabel.appendChild(welcomeWindowText);
  welcomeWindowLabel.setAttribute('for', 'welcomeInput');
  welcomeWindowInput.setAttribute('id', 'welcomeInput');
  welcomeWindowButton.setAttribute('id', 'welcomeBtn');
  welcomeWindowButton.appendChild(welcomeButtonText);
  welcomeWindowContainer.setAttribute('id', 'welcome');
  welcomeWindowContainer.appendChild(welcomeWindowLabel);
  welcomeWindowContainer.appendChild(welcomeWindowInput);
  welcomeWindowContainer.appendChild(welcomeWindowButton);
  wrapper.appendChild(welcomeWindowContainer);
  welcomeComponentLogic();
};

export default createWelcomeWindow;
