class NumberArray {
  constructor(array) {
    this.array = array;
  }
  getLastElem() {
    return this.array[this.array.length - 1];
  }
  getAbs() {
    return Math.abs(this.array[0] - this.array[this.array.length - 1]);
  }
  getSum() {
    return this.array.reduce((acc, elem) => acc + elem);
  }
  setArray(n) {
    let newArr = this.array.map((elem) => elem * n);
    return newArr;
  }
  createObject() {
    let newObj = this.array.reduce((acc, elem, i) => {
      acc[`elem${i + 1}`] = elem;
      return acc;
    }, {});
    return newObj;
  }
}
const arr = new NumberArray([10, 20, 30, 40]);
console.log(arr.getLastElem());
console.log(arr.getAbs());
console.log(arr.getSum());
console.log(arr.setArray(2));
console.log(arr.createObject());
