function foo(callback) {
  const a = [4, 5, 6];
  let elem = document.querySelector('.out-1');
  callback(elem, a);
}

function out(elem, arr) {
  elem.innerHTML = arr.join(' ');
}
foo(out);
