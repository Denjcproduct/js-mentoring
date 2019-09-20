import createElement from '../helpers/createElement';
import createMenu from './createMenu';
import data from './data';

const createHeader = function createHeaderMethod() {
  const header = createElement('header', 'header');
  const headerWrapper = createElement('div', 'headerWrapper');
  const headerContainer = createElement('nav', 'headerContainer');
  headerContainer.setAttribute('tabindex', '0');
  createMenu(data, headerContainer);
  header.appendChild(headerWrapper);
  headerWrapper.appendChild(headerContainer);
  document.body.appendChild(header);
};

export default createHeader;
