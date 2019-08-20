module.exports = createAutoComplete;

function TrieNode(key) {
  this.key = key;
  this.parent = null;
  this.children = {};
  this.end = false;
}

TrieNode.prototype.getWord = function() {
  let output = [];
  let node = this;
  while (node !== null) {
    output.unshift(node.key);
    node = node.parent;
  }
  return output.join("");
};

function Trie() {
  this.root = new TrieNode(null);
}

Trie.prototype.insert = function(word) {
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
};
Trie.prototype.find = function(prefix) {
  var node = this.root;
  var output = [];
  let prefixFirstLetter = prefix[0];
  let lowerNode = this.root;
  let upperNode = this.root;
  let prefixLettersWithoutFirst = prefix.substr(1);
  if (node.children[prefixFirstLetter.toLowerCase()]) {
    lowerNode = node.children[prefixFirstLetter.toLowerCase()];
    if (prefixLettersWithoutFirst) {
      for (let i = 0; i < prefixLettersWithoutFirst.length; i++) {
        if (lowerNode.children[prefixLettersWithoutFirst[i]]) {
          lowerNode = lowerNode.children[prefixLettersWithoutFirst[i]];
        } else {
          return output;
        }
      }
    }
    findAllWords(lowerNode, output);
  }
  if (node.children[prefixFirstLetter.toUpperCase()]) {
    upperNode = node.children[prefixFirstLetter.toUpperCase()];
    if (prefixLettersWithoutFirst) {
      for (let i = 0; i < prefixLettersWithoutFirst.length; i++) {
        if (upperNode.children[prefixLettersWithoutFirst[i]]) {
          upperNode = upperNode.children[prefixLettersWithoutFirst[i]];
        } else {
          return output;
        }
      }
    }
    findAllWords(upperNode, output);
  }
  return output;
};
function findAllWords(node, arr) {
  if (node.end) {
    arr.push(node.getWord());
  }
  for (let child in node.children) {
    findAllWords(node.children[child], arr);
  }
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
    return trie.find(prefix);
  };
}
