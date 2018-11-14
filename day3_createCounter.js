function createCounter() {
  let number = 0;
  return {
    inc: () => {
      number++;
      return number;
    },
    dec: () => {
      number--;
      return number;
    },
    getCount: () => {
      return number;
    },
  };
}

console.log(createCounter());
