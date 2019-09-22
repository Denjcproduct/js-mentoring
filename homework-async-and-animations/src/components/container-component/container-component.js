import createElement from '../../helpers/createElement';

const createContainer = function container() {
  const main = createElement('main', 'wrapper');
  const chat = createElement('div', 'container');
  chat.setAttribute('id', 'chat');
  main.setAttribute('id', 'app');
  main.appendChild(chat);
  document.body.appendChild(main);
};

export default createContainer;
