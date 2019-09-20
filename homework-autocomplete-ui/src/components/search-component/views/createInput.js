import createElement from '../helpers/createElement';

const createInput = function createInputMethod() {
  const main = createElement('main', 'wrapper');
  const div = createElement('div', 'container');
  const inputBlock = createElement('div', 'inputContainer');
  const input = createElement('input', 'inputContainer__input');
  const label = createElement('label', 'inputContainer__label');
  const labelText = document.createTextNode('SEARCH');
  input.setAttribute('id', 'input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'search');
  label.setAttribute('for', 'input');
  label.appendChild(labelText);
  inputBlock.appendChild(label);
  inputBlock.appendChild(input);
  div.appendChild(inputBlock);
  main.appendChild(div);
  document.body.appendChild(main);
};

export default createInput;
