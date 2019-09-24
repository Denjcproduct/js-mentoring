import createElement from '../helpers/createElement';

const createAddMessageInput = function addMessageInput() {
  const chatInputContainer = createElement('div', 'chat__inputContainer');
  const chatForm = createElement('form', 'chat__form');
  const chatButton = createElement('input', 'chat__button');
  const chatInput = createElement('input', 'chat__input');
  const chat = document.querySelector('#chat');
  chatForm.setAttribute('name', 'chat');
  chatInput.setAttribute('type', 'text');
  chatInput.setAttribute('name', 'message');
  chatButton.setAttribute('id', 'addMessageBtn');
  chatButton.setAttribute('type', 'submit');
  chatButton.setAttribute('value', 'Отправить');
  chatForm.appendChild(chatInput);
  chatForm.appendChild(chatButton);
  chatInputContainer.setAttribute('id', 'chatFooter');
  chatInputContainer.appendChild(chatForm);
  chat.appendChild(chatInputContainer);
};

export default createAddMessageInput;
