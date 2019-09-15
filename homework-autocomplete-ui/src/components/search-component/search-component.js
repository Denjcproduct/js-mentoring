import createInput from './createInput';
import createResultBlock from './createResultBlock';
import addInputListeners from './addInputListeners';
import cities from './data/cities.json';

const app = function appStart() {
  createInput();
  createResultBlock();
  addInputListeners('#input', '#result', cities);
};

export default app;
