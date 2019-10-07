const createElement = function createElementMethod(tag, tagClass) {
  if (typeof tag !== 'string' || typeof tagClass !== 'string') {
    console.log('tag and tagClass should be a string');
  }
  const newTag = document.createElement(tag);
  newTag.classList.add(tagClass);
  return newTag;
};

export default createElement;
