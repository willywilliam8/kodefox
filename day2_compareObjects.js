function compareObjects(arr1, arr2) {
  let key1 = Object.keys(arr1);
  let key2 = Object.keys(arr2);

  if (arr1.length === arr2.length) {
    for (let i = 0; i < key1.length; i++) {
      for (let key of key1) {
        if (arr1[key] === arr2[key]) {
          return true;
        }
      }
    }
  }
  return false;
}

let result = compareObjects(
  {one: 'Hello', two: 'World'},
  {two: 'World', one: 'Hello'},
);
console.log(result);
