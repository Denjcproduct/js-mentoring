import router from './localStorage/router';
import createWelcomeWindow from './components/welcome-component/welcome-component';
import createContainer from './components/container-component/container-component';
import createHeader from './components/header-component/header-component';
import createChatWindow from './components/chatWindow-component/chatWindow-component';
import createAddMessageInput from './components/addMessage-input-component/addMessage-input-component';
import './components/welcome-component/welcome-component.css';
import './components/container-component/container-component.css';
import './components/header-component/header-component.css';
import './components/chatWindow-component/chatWindow-component.css';
import './components/addMessage-input-component/addMessage-input-component.css';

const app = function createApp() {
  createContainer();
  createWelcomeWindow();
  router();
  createHeader();
  createChatWindow();
  createAddMessageInput();
};

app();
