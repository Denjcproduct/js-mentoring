import createElement from '../../helpers/createElement';
import './chatWindow-component.css';

const createChatWindow = function chatWindow(selector) {
  const chatContainer = createElement('div', 'chat__mainContainer');
  const chat = document.querySelector(selector);
  chatContainer.setAttribute('id', 'chatWindow');
  chat.appendChild(chatContainer);
};

export default createChatWindow;
