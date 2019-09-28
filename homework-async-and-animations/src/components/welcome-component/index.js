import createElement from '../../helpers/createElement';
import createWelcomeInput from './createWelcomeInput';
import createWelcomeButton from './createWelcomeButton';
import welcomeComponentLogic from './welcome-component-logic';
import './welcome-component.css';

const createWelcomeWindow = function welcomeWindow() {
  const welcomeWindowContainer = createElement('div', 'welcome__container');
  const wrapper = document.querySelector('#app');
  const welcomeInput = createWelcomeInput();
  const welcomeButton = createWelcomeButton();
  welcomeWindowContainer.setAttribute('id', 'welcome');
  welcomeWindowContainer.appendChild(welcomeInput);
  welcomeWindowContainer.appendChild(welcomeButton);
  wrapper.appendChild(welcomeWindowContainer);
  welcomeComponentLogic();
};

export default createWelcomeWindow;
