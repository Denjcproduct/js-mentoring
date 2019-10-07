import messageView from '../components/message-component';

const showMessage = function show(data) {
  data.forEach((element) => {
    messageView('#chatWindow', element);
  });
};

export default showMessage;
