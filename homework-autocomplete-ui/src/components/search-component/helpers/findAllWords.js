import getWord from './getWord';

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

export default findAllWords;
