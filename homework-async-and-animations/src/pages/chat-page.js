import createHeader from '../components/header-component';
import createChatWindow from '../components/chatWindow-component';
import createAddMessageInput from '../components/addMessage-input-component';

const createChatPage = function chatPage() {
  createHeader();
  createChatWindow();
  createAddMessageInput();
};

export default createChatPage;
