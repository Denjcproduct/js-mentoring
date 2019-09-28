import createHeader from '../components/header-component';
import createChatWindow from '../components/chatWindow-component';
import createAddMessageComponent from '../components/addMessage-component';

const createChatPage = function chatPage() {
  createHeader();
  createChatWindow();
  createAddMessageComponent();
};

export default createChatPage;
