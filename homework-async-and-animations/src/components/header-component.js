import createElement from '../helpers/createElement';

const createHeader = function header() {
  const chatHeader = createElement('div', 'chat__header');
  const logoContainer = createElement('div', 'chat__logoContainer');
  const logo = createElement('img', 'chat__logo');
  const chatName = createElement('div', 'chat__name');
  const chat = document.querySelector('#chat');
  const userName = localStorage.getItem('chatUserName');
  const nameText = userName
    ? document.createTextNode(userName)
    : document.createTextNode('DefaultName');
  logo.setAttribute('alt', 'Logo');
  logo.setAttribute('src', './assets/icons/logo.svg');
  logoContainer.appendChild(logo);
  chatHeader.appendChild(logoContainer);
  chatHeader.appendChild(chatName);
  chatName.appendChild(nameText);
  chat.appendChild(chatHeader);
};

export default createHeader;
