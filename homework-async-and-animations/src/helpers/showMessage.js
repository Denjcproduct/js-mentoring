import messageView from '../components/message-component';

const showMessage = function show(data) {
  data.forEach((element) => {
    messageView(element);
  });
};

export default showMessage;
