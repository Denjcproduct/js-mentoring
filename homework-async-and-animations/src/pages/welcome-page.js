import createWelcomeWindow from '../components/welcome-component';
import createContainer from '../components/container-component';

const createWelcomePage = function welcomePage() {
  createContainer();
  createWelcomeWindow();
};

export default createWelcomePage;
