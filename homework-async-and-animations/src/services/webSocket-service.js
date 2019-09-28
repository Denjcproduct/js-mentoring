import showMessage from '../helpers/showMessage';
import Messages from './messages';
import scrollingChat from '../helpers/scrollingChat';

export default window.onload = function webSocketConnect() {
  const socket = new WebSocket('ws://st-chat.shas.tel');
  socket.onopen = function socketOpen() {
    console.log('Соединение установлено');
  };

  socket.onclose = function socketClose(event) {
    if (event.wasClean) {
      console.log('Соединение закрыто чисто');
    } else {
      console.log('Обрыв соединения');
    }
    console.log(`Код: ${event.code} причина ${event.reason}`);
  };

  socket.onmessage = function socketOnMessage(event) {
    const messages = new Messages(JSON.parse(event.data));
    const sortedMessages = messages.sortedMessages();
    showMessage(sortedMessages);
    scrollingChat();
  };

  socket.onerror = function socketOnError(error) {
    console.log(`Ошибка ${error.message}`);
  };
  document.forms.chat.onsubmit = function formSubmit() {
    const message = {
      from: localStorage.getItem('chatUserName'),
      message: this.message.value,
    };
    const messageToSend = JSON.stringify(message);
    socket.send(messageToSend);
    this.message.value = '';
    return false;
  };
};
