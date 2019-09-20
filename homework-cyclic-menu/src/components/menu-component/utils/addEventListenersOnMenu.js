const addEventListenersOnMenu = function addEventListenersOnMenuMethod() {
  const links = document.querySelectorAll('.link');
  links.forEach((element, index) => {
    if (index === 0) {
      element.focus();
      element.setAttribute('tabindex', '0');
    }
    element.addEventListener('keydown', (event) => {
      const pressArrowLeft = event.keyCode === 37;
      const pressArrowRight = event.keyCode === 39;
      if (pressArrowLeft) {
        let prevElement = links[index - 1];
        if (prevElement === undefined) {
          prevElement = links[links.length - 1];
        }
        element.setAttribute('tabindex', '-1');
        prevElement.focus();
        prevElement.setAttribute('tabindex', '0');
      } else if (pressArrowRight) {
        let nextElement = links[index + 1];
        if (!nextElement) {
          nextElement = links[0];
        }
        element.setAttribute('tabindex', '-1');
        nextElement.focus();
        nextElement.setAttribute('tabIndex', '0');
      }
    });
  });
};

export default addEventListenersOnMenu;
