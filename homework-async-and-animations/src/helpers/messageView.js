import createElement from './createElement';
import formatTime from './formatTime';

const messageView = function message(data) {
  const chat = document.querySelector('#chatWindow');
  const messageContainer = createElement('div', 'message__container');
  const messageName = createElement('span', 'message__name');
  const messageText = createElement('span', 'message__text');
  const messageTime = createElement('span', 'message__time');
  const name = document.createTextNode(data.from);
  const text = document.createTextNode(data.message);
  const time = document.createTextNode(formatTime(data.time));
  messageName.appendChild(name);
  messageText.appendChild(text);
  messageTime.appendChild(time);
  messageContainer.appendChild(messageName);
  messageContainer.appendChild(messageTime);
  messageContainer.appendChild(messageText);
  chat.appendChild(messageContainer);
};

export default messageView;
