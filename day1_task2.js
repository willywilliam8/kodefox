let array = {
  number: [1, 2, 3],
};

let array2 = array;

array.number = [1, 3, 4];

console.log(array === array2);
