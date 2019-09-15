import createElement from './helpers/createElement';

const createResultBlock = function createResultBlockMethod() {
  const resultBlockParent = document.querySelector('.container');
  const resultBlock = createElement('div', 'resultContainer');
  resultBlock.setAttribute('id', 'result');
  resultBlockParent.appendChild(resultBlock);
};

export default createResultBlock;
