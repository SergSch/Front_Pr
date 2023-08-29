// 1. Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.forEach((elem) => {
    if (elem === true) {
      count++;
    }
  });
  return count;
}
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);

// 2. Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
function problem(x) {
  let res = 0;
  if (typeof x === 'string') {
    return 'Error';
  } else {
    res = x * 50 + 6;
  }
  return res;
}
console.log(problem('sdf'));

// 3. Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// function shortcut(string) {
//   let newStr = '';
//   for (let i = 0; i < string.length; i++) {
//     if (
//       string[i] != 'a' &&
//       string[i] != 'e' &&
//       string[i] != 'i' &&
//       string[i] != 'o' &&
//       string[i] != 'u'
//     ) {
//       newStr += string[i];
//     }
//   }
//   return newStr;
// }
// console.log(shortcut('hello'));

// 4. Write function bmi that calculates body mass index (bmi = weight / height2).
function bmi(weight, height) {
  let bmi = weight / height ** 2;
  if (bmi <= 18.5) {
    return 'Underweight';
  } else if (bmi <= 25) {
    return 'Normal';
  } else if (bmi <= 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}
console.log(bmi(100, 1.9));

//5. This code does not execute properly. Try to figure out why.
// Там ошибка в задаче..

// 6. Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord(bool) {
  if (bool == true) {
    return 'Yes';
  } else if (bool == false) {
    return 'No';
  }
}
console.log(boolToWord(true));

// 7. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
var summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};
console.log(summation(2));

// 8. I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.
function arrayPlusArray(arr1, arr2) {
  let bigArr = [...arr1, ...arr2];
  let sum = 0;
  bigArr.forEach((el) => (sum += el));
  return sum;
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// 9. Our football team has finished the championship.
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
function points(games) {
  let sum = 0;
  games.forEach((elem) => {
    if (elem[0] > elem[elem.length - 1]) {
      sum += 3;
    } else if (elem[0] == elem[elem.length - 1]) {
      sum++;
    }
  });
  return sum;
}
console.log(
  points(['1:0', '2:0', '3:0', '4:4', '2:2', '3:3', '1:4', '2:3', '2:4', '3:4'])
);

// 10. Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
function litres(time) {
  let litr = Math.floor(time) / 2;
  return Math.floor(litr);
}
console.log(litres(7.8));
