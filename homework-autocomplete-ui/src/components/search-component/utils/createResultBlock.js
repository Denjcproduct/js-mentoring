import createElement from '../helpers/createElement';

const createResultBlock = function createResultBlockMethod() {
  const resultBlockParent = document.querySelector('.container');
  const resultBlock = createElement('div', 'resultContainer');
  const resultTitleBlock = createElement('div', 'resultContainer__title');
  const resultText = createElement('div', 'resultContainer__text');
  const resultTitle = document.createTextNode('RESULT');
  resultTitleBlock.appendChild(resultTitle);
  resultText.setAttribute('id', 'result');
  resultBlock.appendChild(resultTitleBlock);
  resultBlock.appendChild(resultText);
  resultBlockParent.appendChild(resultBlock);
};

export default createResultBlock;
