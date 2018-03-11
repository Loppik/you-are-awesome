// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperties(Object.prototype, { "property": {value: "value",  enumerable: false } });

   return {toString: () => {return propertyName;}}
};
const createProtoMagicObject = () => {
    let obj = function () {};
    obj.__proto__ = obj.prototype;
    return obj;
};

let i = 0;
const incrementor = () => {
    i++;
    return incrementor;
};
incrementor.toString = function() {return i;};

let j = 0;
const asyncIncrementor = () => {
    return new Promise(function() {
        j++;
    });
};
asyncIncrementor.toString = function() {return j;}

const createIncrementer = () => {

};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    let resolve = function(param) {return param;}
    return new Promise((resolve) => {
        setTimeout(() => {return resolve(param)}, 1000);
    });
};


const getDeepPropertiesCount = (obj) => {
    let count = 0; 

    let getPropCount = (obj) => {
        for(key in obj) {
            getPropCount(obj[key])
            count++;
        };
        return count;
    }
    return getPropCount(obj); 
};
const createSerializedObject = () => {
    return new Object();
};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;

const obj = {};
    let temp = obj;
    for (let i = 0; i < 100; i++) {
      temp[i] = {};
      temp[i][i - 1] = {};
      temp[i][i] = {};
      temp[i][i + 1] = {};

      temp = temp[i][i];
    }

    const count1 = getDeepPropertiesCount(obj);
    console.log(count1)

    for (let i = 0; i < 100; i++) {
      temp[i] = {};
      temp[i][i] = {};
      temp[i][i + 1] = {};

      temp = temp[i][i];
    }
    
    const count2 = getDeepPropertiesCount(obj);
    console.log(count2)