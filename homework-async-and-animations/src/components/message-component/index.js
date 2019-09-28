import createMessage from './createMessage';
import './message-component.css';

const messageView = function message(data) {
  const chat = document.querySelector('#chatWindow');
  const chatMessage = createMessage(data);
  chat.appendChild(chatMessage);
  chatMessage.classList.add('show');
};

export default messageView;
