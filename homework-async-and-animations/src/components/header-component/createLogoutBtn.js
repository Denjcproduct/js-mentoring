import createElement from '../../helpers/createElement';
import logout from './logout';

const createLogoutBtn = function logoutBtn() {
  const button = createElement('button', 'chat__logoutBtn');
  const buttonText = document.createTextNode('Выйти');
  button.appendChild(buttonText);
  logout(button);
  return button;
};

export default createLogoutBtn;
