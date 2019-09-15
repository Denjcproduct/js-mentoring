const addInputListeners = function addInputListenersMethod(id) {
  const input = document.querySelector(id);
  input.addEventListener('input', () => {
    console.log(input.value);
  });
};

export default addInputListeners;
