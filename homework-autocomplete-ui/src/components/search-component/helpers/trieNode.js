class TrieNode {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;
    this.count = null;
  }
}

export default TrieNode;
