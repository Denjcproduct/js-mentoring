class Messages {
  constructor(messages) {
    this.messages = messages;
  }

  sortedMessages() {
    const sortedArray = this.messages.sort(
      (a, b) => new Date(a.time) - new Date(b.tiem)
    );
    return sortedArray.reverse();
  }
}

export default Messages;
