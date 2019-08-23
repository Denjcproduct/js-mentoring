module.exports = createAutoComplete;
class TrieNode {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;
  }
  getWord() {
    let output = [];
    let node = this;
    while (node !== null) {
      output.unshift(node.key);
      node = node.parent;
    }
    return output.join("");
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }
  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new TrieNode(word[i]);
        node.children[word[i]].parent = node;
      }
      node = node.children[word[i]];
      if (i == word.length - 1) {
        node.end = true;
      }
    }
  }
  find(prefix) {
    let node = this.root;
    let output = [];
    for (let i = 0; i < prefix.length; i++) {
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]];
      } else {
        return output;
      }
    }
    findAllWords(node, output);
    return output;
  }
}
function findAllWords(node, arr) {
  if (node.end) {
    arr.push(node.getWord());
  }
  for (let child in node.children) {
    findAllWords(node.children[child], arr);
  }
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function createAutoComplete(array) {
  const trie = new Trie();
  array.forEach(word => {
    trie.insert(word);
  });
  return function(prefix) {
    if (!prefix || prefix === "") {
      return [];
    }
    const prefixInLowerCase = prefix.toLowerCase();
    const capitalizePrefix = capitalizeFirstLetter(prefix);
    const lowerResult = trie.find(prefixInLowerCase);
    const upperResult = trie.find(capitalizePrefix);
    const result = lowerResult.concat(upperResult);
    return result;
  };
}
