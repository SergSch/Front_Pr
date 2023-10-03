const a = [3, 4, 5, 6, 7];
let b = a.every((elem) => {
  if (elem > 3) {
    return true;
  }
});
console.log(b);
