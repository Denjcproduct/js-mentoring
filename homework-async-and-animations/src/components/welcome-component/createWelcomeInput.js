import createElement from '../../helpers/createElement';

const createWelcomeInput = function welcomeInput() {
  const inputContainer = createElement('div', 'welcome__inputContainer');
  const input = createElement('input', 'welcome__input');
  const label = createElement('label', 'welcome__label');
  const labelText = document.createTextNode(
    'Добро пожаловать в чат, для пользования данным чатом введите ваше Имя'
  );
  label.appendChild(labelText);
  label.setAttribute('for', 'welcomeInput');
  input.setAttribute('id', 'welcomeInput');
  inputContainer.appendChild(label);
  inputContainer.appendChild(input);
  return inputContainer;
};

export default createWelcomeInput;
