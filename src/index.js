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

let count = 0;
const getDeepPropertiesCount = (obj) => {
    if (obj == undefined || obj == null) {
        return;
    }
    for(key in obj) {
        getDeepPropertiesCount(obj[key])
        count++;
    };

    return count; 
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

