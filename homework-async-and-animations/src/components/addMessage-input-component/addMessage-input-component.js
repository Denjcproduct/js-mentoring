import createElement from '../../helpers/createElement';

const createAddMessageInput = function addMessageInput() {
  const chatInputContainer = createElement('div', 'chat__inputContainer');
  const chatButton = createElement('button', 'chat__button');
  const chatInput = createElement('input', 'chat__input');
  const chat = document.querySelector('#chat');
  const buttonText = document.createTextNode('Отправить');
  chatInput.setAttribute('type', 'text');
  chatButton.setAttribute('id', 'addMessageBtn');
  chatButton.appendChild(buttonText);
  chatInputContainer.appendChild(chatInput);
  chatInputContainer.appendChild(chatButton);
  chat.appendChild(chatInputContainer);
};

export default createAddMessageInput;
