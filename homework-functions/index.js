module.exports = createAutoComplete;

// First implementation of autocomplete

// function createAutoComplete(array) {
//   return function(value) {
//     if (!value || value === "") {
//       return [];
//     }
//     const reg = new RegExp(
//       value
//         .split("")
//         .join("\\w*")
//         .replace(/\W/, ""),
//       "i"
//     );
//     const result = array.filter(element => {
//       const elementFristLetters = element.slice(0, value.length);
//       if (reg.test(elementFristLetters)) {
//         return element;
//       }
//     });
//     return result;
//   };
// }

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

//:TODO add Case insensitive to createAutoComplete function

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

const trie = new Trie();
