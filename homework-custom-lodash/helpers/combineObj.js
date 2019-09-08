const combineObj = function (obj1,obj2) {
    const resultObj = {...obj1,...obj2};
    return resultObj;
}

module.exports = combineObj;