let result = [];

let isEqual = function(one, two) {
  if (one.length == two.length) {
    for (let i = 0; i < one.length; i++) {
      return one[i] === two[i];
    }

    return true;
  } else return false;
};

console.log(isEqual([], []), true);
console.log(isEqual([1], [2]), false);
console.log(isEqual([1, 2, 3], [1, 2, 3]), true);
