import Trie from '../helpers/trie';
import capitalizeFirstLetter from '../helpers/capitalizeFirstLetter';

function createAutoComplete(array) {
  const trie = new Trie();
  const counts = array.reduce((obj, cur) => {
    if (!obj[cur]) {
      obj[cur] = 0;
    }
    obj[cur]++;
    return obj;
  }, {});
  const nonRepeatWords = [...new Set(array)];
  nonRepeatWords.forEach((word) => {
    const wordCount = counts[word];
    trie.insert(word, wordCount);
  });
  return function addPrefix(prefix) {
    if (!prefix || prefix === '') {
      return [];
    }
    const prefixInLowerCase = capitalizeFirstLetter(prefix, false);
    const capitalizePrefix = capitalizeFirstLetter(prefix);
    const lowerResult = trie.find(prefixInLowerCase);
    const upperResult = trie.find(capitalizePrefix);
    const result = lowerResult.concat(upperResult);
    return result;
  };
}

export default createAutoComplete;
