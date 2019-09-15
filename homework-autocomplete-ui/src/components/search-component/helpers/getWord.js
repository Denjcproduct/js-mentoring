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

export default getWord;
