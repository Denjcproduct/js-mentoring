import createElement from '../../helpers/createElement';
import createLogo from './createLogo';
import createName from './createName';
import './header-component.css';

const createHeader = function header() {
  const chatHeader = createElement('div', 'chat__header');
  const chat = document.querySelector('#chat');
  const logo = createLogo();
  const name = createName();
  chatHeader.appendChild(logo);
  chatHeader.appendChild(name);
  chat.appendChild(chatHeader);
};

export default createHeader;
