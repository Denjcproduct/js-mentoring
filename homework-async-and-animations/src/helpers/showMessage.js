import messageView from './messageView';

const showMessage = function show(data) {
  data.forEach(element => {
    messageView(element);
  });
};

export default showMessage;
