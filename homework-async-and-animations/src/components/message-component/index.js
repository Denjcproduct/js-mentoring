import createMessage from './createMessage';
import './message-component.css';

const messageView = function message(selector, data) {
  const chat = document.querySelector(selector);
  const chatMessage = createMessage(data);
  chat.appendChild(chatMessage);
  chatMessage.classList.add('show');
};

export default messageView;
