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

let result = compareObjects(
  {one: 'Hello', two: 'World'},
  {three: 'World', one: 'Hello'},
);
console.log(result);

//export default compareObjects;
