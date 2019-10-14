import createElement from '../../helpers/createElement';

const createSendBtn = function sendButton() {
  const chatButton = createElement('button', 'chat__button');
  const chatButtonImg = createElement('img', 'chat__buttonImage');
  chatButtonImg.setAttribute('alt', 'sendImage');
  chatButtonImg.setAttribute('src', './assets/icons/send.svg');
  chatButton.setAttribute('id', 'addMessageBtn');
  chatButton.setAttribute('type', 'submit');
  chatButton.appendChild(chatButtonImg);
  return chatButton;
};

export default createSendBtn;
