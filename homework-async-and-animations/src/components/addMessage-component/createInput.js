import createElement from '../../helpers/createElement';

const createInput = function input() {
  const chatInput = createElement('input', 'chat__input');
  chatInput.setAttribute('type', 'text');
  chatInput.setAttribute('name', 'message');
  return chatInput;
};

export default createInput;
