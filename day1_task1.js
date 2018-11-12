let newArr = [];

function doubleArray(arr) {
  for (let number of arr) {
    newArr.push(number * 2);
  }
  return newArr;
}

console.log(doubleArray([3, 2, 8]));
