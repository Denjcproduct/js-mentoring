import TrieNode from './trieNode';
import findAllWords from './findAllWords';

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

export default Trie;
