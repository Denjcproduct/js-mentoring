import createInput from './views/createInput';
import createResultBlock from './views/createResultBlock';
import addInputListeners from './views/addInputListeners';
import data from './data/data';

const app = function appStart() {
  createInput();
  createResultBlock();
  addInputListeners('#input', '#result', data);
};

export default app;
