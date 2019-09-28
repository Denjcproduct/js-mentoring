import createElement from '../../helpers/createElement';
import formatTime from '../../helpers/formatTime';

const createMessage = function message(data) {
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
  return messageContainer;
};

export default createMessage;
