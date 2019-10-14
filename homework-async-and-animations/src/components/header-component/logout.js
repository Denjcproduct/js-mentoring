const logout = function logoutMethod(button) {
  button.addEventListener('click', () => {
    localStorage.removeItem('chatUserName');
    document.location.reload(true);
  });
};

export default logout;
