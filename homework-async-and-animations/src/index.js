import router from './localStorage/router';
import createChatPage from './pages/chat-page';
import createWelcomePage from './pages/welcome-page';
import './styles/styles.css';

const app = function createApp() {
  createWelcomePage();
  createChatPage();
  router();
};

app();
