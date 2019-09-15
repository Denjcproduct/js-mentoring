import createInput from './utils/createInput';
import createResultBlock from './utils/createResultBlock';
import addInputListeners from './utils/addInputListeners';
import data from './data/data';

const app = function appStart() {
  createInput();
  createResultBlock();
  addInputListeners('#input', '#result', data);
};

export default app;
