import createElement from '../../helpers/createElement';
import createInput from './createInput';
import createSendBtn from './createSendBtn';
import './addMessage-component.css';

const createAddMessageComponent = function addMessageComponent() {
  const chat = document.querySelector('#chat');
  const chatInputContainer = createElement('div', 'chat__inputContainer');
  const chatForm = createElement('form', 'chat__form');
  const chatInput = createInput();
  const chatSendBtn = createSendBtn();
  chatForm.setAttribute('name', 'chat');
  chatInputContainer.setAttribute('id', 'chatFooter');
  chatForm.appendChild(chatInput);
  chatForm.appendChild(chatSendBtn);
  chatInputContainer.appendChild(chatForm);
  chat.appendChild(chatInputContainer);
};

export default createAddMessageComponent;
