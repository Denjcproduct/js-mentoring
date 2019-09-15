import createHeader from './utils/createHeader';
import addEventListenersOnMenu from './utils/addEventListenersOnMenu';

const app = function appStart() {
  createHeader();
  addEventListenersOnMenu();
};

export default app;
