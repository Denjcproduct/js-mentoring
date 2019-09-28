const welcomeComponentLogic = function welcomeLogic() {
  const welcomeInput = document.querySelector('#welcomeInput');
  const welcomeBtn = document.querySelector('#welcomeBtn');
  const chat = document.querySelector('#chat');
  const welcome = document.querySelector('#welcome');
  welcomeBtn.addEventListener('click', () => {
    if (welcomeInput.value === '') {
      alert('Для того чтобы зайти в чат, введите ваше Имя');
    }
    if (welcomeInput.value !== '') {
      localStorage.setItem('chatUserName', welcomeInput.value);
      document.location.reload(true);
    }
  });
};

export default welcomeComponentLogic;
