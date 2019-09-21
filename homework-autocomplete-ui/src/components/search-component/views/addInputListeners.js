import createAutoComplete from './createAutoComplete';

const addInputListeners = function addInputListenersMethod(
  inputId,
  resultId,
  data,
) {
  const input = document.querySelector(inputId);
  const result = document.querySelector(resultId);
  const autocomplete = createAutoComplete(data);
  input.addEventListener('input', () => {
    result.innerHTML = autocomplete(input.value);
  });
};

export default addInputListeners;
