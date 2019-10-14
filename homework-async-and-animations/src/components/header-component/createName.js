import createElement from '../../helpers/createElement';

const createName = function chatName() {
  const nameContainer = createElement('div', 'chat__name');
  const userName = localStorage.getItem('chatUserName');
  const nameText = userName
    ? document.createTextNode(userName)
    : document.createTextNode('DefaultName');
  nameContainer.appendChild(nameText);
  return nameContainer;
};

export default createName;
