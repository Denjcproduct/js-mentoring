import createElement from '../../helpers/createElement';
import createLogo from './createLogo';
import createName from './createName';
import createLogoutBtn from './createLogoutBtn';
import './header-component.css';

const createHeader = function header() {
  const chatHeader = createElement('div', 'chat__header');
  const chat = document.querySelector('#chat');
  const logo = createLogo();
  const name = createName();
  const logoutBtn = createLogoutBtn();
  chatHeader.appendChild(logo);
  chatHeader.appendChild(name);
  chatHeader.appendChild(logoutBtn);
  chat.appendChild(chatHeader);
};

export default createHeader;
