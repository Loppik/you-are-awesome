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
const asyncIncrementor = async () => {
    j++;
    return j;
};

function* createIncrementer() {
    let value = 1;
    while(true) {
        yield value++;
    };
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    let success = function(param) {return param;}
    return new Promise((success) => {
        setTimeout(() => {return success(param)}, 1000);
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
const sortByProto = (ar) => {
    let comparator = (a, b) => {
        while(a.__proto__ != null) {
            if (a == b) {
                return a - b;
            }
            a = a.__proto__;
        }
        return b - a;
    };
    
    return ar.sort(comparator);;
    
};

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
