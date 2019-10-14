import scrollToBottom from './scrollToBottom';

const scrollingChat = function scroll() {
  console.log('scrolling');
  const chatWindow = document.querySelector('#chatWindow');
  const shouldScroll =
    chatWindow.scrollTop + chatWindow.clientHeight === chatWindow.scrollHeight;
  if (!shouldScroll) {
    scrollToBottom(chatWindow);
  }
  scrollToBottom(chatWindow);
};

export default scrollingChat;
