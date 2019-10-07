const router = function checkStorage() {
  const userName = localStorage.getItem('chatUserName');
  const welcome = document.querySelector('#welcome');
  const chat = document.querySelector('#chat');
  console.log(userName);
  if (!userName) {
    welcome.classList.add('show');
    welcome.style.display = 'flex';
    chat.style.display = 'none';
  }
  if (userName) {
    chat.classList.add('show');
    welcome.style.display = 'none';
    chat.style.display = 'flex';
  }
};

export default router;
