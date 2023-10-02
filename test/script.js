// const p1 = new Promise(() => {

// });
// console.log(p1);

// const p2 = new Promise((resolve, reject) => {
//   fetch('https://api.itgid.info/api/de6lay').then((res) => {
//     console.log(res);
//     if (res.ok) {
//       resolve(res.json());
//     } else {
//       reject(res);
//     }
//   });
// });
// console.log(p2);

// p2.then(f1, f2);

// function f1(data) {
//   console.log(p2);
//   console.log('success');
//   console.log(data);
// }

// function f2() {
//   console.log(p2);
//   console.log('problem');
// }

const sendJsonRequest = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          resolve(response.json());
        } else {
          reject(response);
        }
      })
      .catch((error) => reject(error));
  });
};
sendJsonRequest('https://api.itgid.inf5o/api/delay')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
