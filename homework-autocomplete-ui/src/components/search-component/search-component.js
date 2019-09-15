import createInput from './createInput';
import createResultBlock from './createResultBlock';
import addInputListeners from './addInputListeners';

const app = function appStart() {
  createInput();
  createResultBlock();
  addInputListeners('#input');
};

export default app;
