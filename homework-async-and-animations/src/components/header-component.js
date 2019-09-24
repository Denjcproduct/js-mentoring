import createElement from '../helpers/createElement';

const createHeader = function header() {
  const chatHeader = createElement('div', 'chat__header');
  const chatLogo = createElement('div', 'chat__logo');
  const chatName = createElement('div', 'chat__name');
  const chat = document.querySelector('#chat');
  const logoText = document.createTextNode('CHAT');
  const userName = localStorage.getItem('chatUserName');
  const nameText = userName
    ? document.createTextNode(userName)
    : document.createTextNode('DefaultName');
  chatLogo.appendChild(logoText);
  chatHeader.appendChild(chatLogo);
  chatHeader.appendChild(chatName);
  chatName.appendChild(nameText);
  chat.appendChild(chatHeader);
};

export default createHeader;
