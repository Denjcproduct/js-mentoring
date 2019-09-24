import router from './services/router-service';
import createChatPage from './pages/chat-page';
import createWelcomePage from './pages/welcome-page';
import scrollingChat from './helpers/scrollingChat';
import './services/webSocket-service';
import './styles/styles.css';

const app = function createApp() {
  createWelcomePage();
  createChatPage();
  router();
  scrollingChat();
};

app();
