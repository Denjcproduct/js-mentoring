import createElement from '../../helpers/createElement';
import createWelcomeInput from './createWelcomeInput';
import createWelcomeButton from './createWelcomeButton';
import welcomeComponentLogic from './welcome-component-logic';
import './welcome-component.css';

const createWelcomeWindow = function welcomeWindow() {
  const welcomeWindowContainer = createElement('div', 'welcome__container');
  const welcomeForm = createElement('form', 'welcome__form');
  const wrapper = document.querySelector('#app');
  const welcomeInput = createWelcomeInput();
  const welcomeButton = createWelcomeButton();
  welcomeForm.setAttribute('name', 'login');
  welcomeWindowContainer.setAttribute('id', 'welcome');
  welcomeForm.appendChild(welcomeInput);
  welcomeForm.appendChild(welcomeButton);
  welcomeWindowContainer.appendChild(welcomeForm);
  wrapper.appendChild(welcomeWindowContainer);
  welcomeComponentLogic();
};

export default createWelcomeWindow;
