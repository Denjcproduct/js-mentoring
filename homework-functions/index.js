class TrieNode {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;
    this.count = null;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(word, count) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new TrieNode(word[i]);
        node.children[word[i]].parent = node;
      }
      node = node.children[word[i]];
      if (i == word.length - 1) {
        node.end = true;
        node.count = count;
      }
    }
  }

  find(prefix) {
    let node = this.root;
    const output = [];
    for (let i = 0; i < prefix.length; i++) {
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]];
      } else {
        return output;
      }
    }
    return findAllWords(node);
  }
}

function getWord(trieNode) {
  const output = [];
  let node = trieNode;
  while (node !== null) {
    output.push(node.key);
    node = node.parent;
  }
  output.reverse();
  return output.join('');
}

function findAllWords(node, arr = []) {
  const resultArr = arr;
  if (node.end) {
    for (let k = 0; k < node.count; k++) {
      resultArr.push(getWord(node));
    }
  }
  for (const child in node.children) {
    findAllWords(node.children[child], resultArr);
  }
  return resultArr;
}

function capitalizeFirstLetter(string, toCapital = true) {
  return toCapital
    ? string.charAt(0).toUpperCase() + string.slice(1)
    : string.charAt(0).toLowerCase() + string.slice(1);
}

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
  return function (prefix) {
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
