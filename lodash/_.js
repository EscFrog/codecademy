
const _ = {
    clamp: function (number, lower, upper) {
      const lowerClampedValue = Math.max(number, lower);
      const clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
  
    inRange: function (number, start, end) {
      if (!end) {
        end = start;
        start = 0;
      }
      if (start > end) {
        let temp = start;
        start = end;
        end = temp;
      }
      const isInRange = (start <= number && number < end) ? true : false;
      return isInRange;
    },
  
    words: function (string) {
      let words = string.split(' ');
      return words;
    },
  
    pad: function (string, length) {
      if (length <= string.length) {
        return string;
      }
      
      const startPaddingLength = Math.floor((length - string.length) / 2);
      const endPaddingLength = length - string.length - startPaddingLength;
      let paddedString = ' ';
      paddedString = paddedString.repeat(startPaddingLength) + string + paddedString.repeat(endPaddingLength);
  
      return paddedString;
    },
  
    has: function (object, key) {
      const hasValue = (object[key] !== undefined) ? true : false;
      return hasValue;
    },
  
    invert: function (object) {
      let invertedObject = {};
      for (let key in object) {
        const originalValue = object[key];
        invertedObject[originalValue] = key;
      }
      return invertedObject;
    },
  
    findKey: function (object, predicate) {
      for (let key in object) {
        const value = object[key];
        const predicateReturnValue = predicate(value);
        if (predicateReturnValue) return key;
      }
      return undefined;
    },
  
    drop: function (array, n) {
      if (!n) n = 1;
      let droppedArray = array.slice(n);
      return droppedArray;
    },
  
    dropWhile: function (array, predicate) {
      const callback = (element, index) => {
        return !predicate(element, index, array);
      }
      let dropNumber = array.findIndex(callback);
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },
  
    chunk (array, size) {
      if (!size) size = 1;
      let arrayChunks = [];
      for (let i = 0; i < array.length; i += size) {
        const arrayChunk = array.slice(i, i+size);
        arrayChunks.push(arrayChunk);
      }
      return arrayChunks;
    }
  };
  
  // Do not write or modify code below this line.
  module.exports = _;
  



// Do not write or modify code below this line.
module.exports = _;