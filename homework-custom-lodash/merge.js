const forEach = require('./helpers/forEach');
const combineObj = require('./helpers/combineObj');
const push = require('./helpers/push');

const merge = function mergeMethod(object,sources) {
  let resultObj = {};
  let resultKey = undefined;
  let resultArray = [];
  for(let key in object) {
      if((key in object) && (key in sources)) {
          resultKey = key;
          forEach(object[key],(element,index) => {
              forEach(sources[key],(element2,index2)=>{
                  if(index === index2) {
                      let combine = combineObj(element,element2);
                      push(resultArray,combine )
                  }
              })
          })

      }
  }
  resultObj[resultKey] = resultArray;
  return resultObj;
};

module.exports = merge;
