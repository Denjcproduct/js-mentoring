const scrollToBottom = function bottomScroll(messageContainer) {
  const messages = messageContainer;
  messages.scrollTop = messages.scrollHeight;
};

export default scrollToBottom;
