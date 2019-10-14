import createHeader from '../components/header-component';
import createChatWindow from '../components/chatWindow-component';
import createAddMessageComponent from '../components/addMessage-component';

const createChatPage = function chatPage() {
  createHeader('#chat');
  createChatWindow('#chat');
  createAddMessageComponent('#chat');
};

export default createChatPage;
