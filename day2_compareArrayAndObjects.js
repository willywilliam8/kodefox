let isEqual = function(one, two) {
  if (one.length == two.length) {
    for (let i = 0; i < one.length; i++) {
      return one[i] === two[i];
    }

    return true;
  } else return false;
};

function compareObjects(arr1, arr2) {
  let boolean = 'false';
  let key1 = Object.keys(arr1);
  let key2 = Object.keys(arr2);
  if (key1.length === key2.length) {
    for (let key of key1) {
      if (arr1[key] === arr2[key]) {
        boolean = 'true';
      }
    }
  }
  return boolean;
}

function compareArrayandObjects(data1, data2) {
  let boolean = 'false';
  if (Array.isArray(data1) && Array.isArray(data2)) {
    isEqual(data1, data2);
  } else {
    if (typeof data1 === 'object' && typeof data2 === 'object') {
      compareObjects(data1, data2);
    } else {
      return boolean;
    }
  }
}

let result = compareArrayandObjects(
  {one: 'Hello', two: 'World'},
  {two: 'World', one: 'Hello'},
);
console.log(result);
