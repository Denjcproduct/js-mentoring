import createElement from '../helpers/createElement';

const createMenu = function createMenuMethod(links, parent) {
  links.forEach(element => {
    const link = createElement('a', 'link');
    const linkText = document.createTextNode(element);
    link.appendChild(linkText);
    link.setAttribute('href', '#');
    link.setAttribute('tabindex', '-1');
    parent.appendChild(link);
  });
};

export default createMenu;
