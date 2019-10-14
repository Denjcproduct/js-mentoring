import { format } from 'date-fns';
import createElement from '../../helpers/createElement';

const createMessage = function message(data) {
  const messageContainer = createElement('div', 'message__container');
  const messageName = createElement('span', 'message__name');
  const messageText = createElement('span', 'message__text');
  const messageTime = createElement('span', 'message__time');
  const name = document.createTextNode(data.from);
  const text = document.createTextNode(data.message);
  const time = document.createTextNode(
    format(data.time, 'dd.MM.yyyy - HH:mm:ss'),
  );
  const userName = localStorage.getItem('chatUserName');
  messageName.appendChild(name);
  messageText.appendChild(text);
  messageTime.appendChild(time);
  messageContainer.appendChild(messageName);
  messageContainer.appendChild(messageTime);
  messageContainer.appendChild(messageText);
  if (data.from === userName) {
    messageContainer.classList.add('my-message');
  }
  return messageContainer;
};

export default createMessage;
