// class Counter {
//   count: number;
//   constructor(initialNumber) {
//     this.count = initialNumber;
//   }

//   inc() {
//     this.count = this.count += 1;
//   }

//   dec() {
//     this.count = this.count -= 1;
//   }

//   getCount() {
//     return this.count;
//   }
// }

// let c = new Counter(10);
// c.dec();
// console.log(c.getCount());

/*
type Data = {
  key: string,
  value: mixed,
};
*/
type Data = {
  [key: string]: mixed,
};

class DataStore {
  item: string;
  price: number;
  data: Data = {};
  // constructor() {
  //   this.item;
  //   this.price;
  //   this.data = {};
  // }

  set(key: string, value: mixed) {
    // data[key] = value
    this.item = key;
    this.price = value;
  }
  get(key: string) {
    return this.item;
  }
  // forEach(fn: function){

  // }
}

let d = new DataStore();
d.set('grape', 2500);
//d.set('cherry', 4700);
d.get();
console.log(d);
// d.forEach((key, value) => {
//   console.log(key, ':', value);
// });
