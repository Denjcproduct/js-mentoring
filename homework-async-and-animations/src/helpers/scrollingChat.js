const scrollingChat = function scroll() {
  const chatWindow = document.querySelector('#chatWindow');
  setTimeout(() => {
    chatWindow.scrollTop = 1000;
  }, 3000);
};

export default scrollingChat;
