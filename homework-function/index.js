module.exports = createAutoComplete;

// First implementation of autocomplete

function createAutoComplete(array) {
  return function(value) {
    if (!value || value === "") {
      return [];
    }
    const reg = new RegExp(
      value
        .split("")
        .join("\\w*")
        .replace(/\W/, ""),
      "i"
    );
    const result = array.filter(element => {
      const elementFristLetters = element.slice(0, value.length);
      if (reg.test(elementFristLetters)) {
        return element;
      }
    });
    return result;
  };
}

// Second implementation of autocomplete

// function createAutoComplete(array) {
//   return function(value) {
//     const valueInLowerCase = value ? value.toLowerCase() : "";
//     const result = array.filter(element => {
//       const elementInLowerCase = element.toLowerCase();
//       if (value === "" || !value) {
//         return false;
//       } else if (elementInLowerCase.startsWith(valueInLowerCase)) {
//         return element;
//       }
//     });
//     return result;
//   };
// }
