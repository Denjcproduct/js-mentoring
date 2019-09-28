import router from './services/router-service';
import createChatPage from './pages/chat-page';
import createWelcomePage from './pages/welcome-page';
import './services/webSocket-service';
import './assets/styles/animations.css';

const app = function createApp() {
  createWelcomePage();
  createChatPage();
  router();
};

app();
