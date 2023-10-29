// class Student {
//   #name;
//   #surn;
//   constructor(name, surn, salary) {
//     this.#name = name;
//     this.#surn = surn;
//     this.salary = salary;
//   }
//   getName() {
//     return this.#name;
//   }
//   getSalary() {
//     return this.salary * 1.1;
//   }
//   show() {
//     return this.getFirstLetter(this.name);
//   }
//   getFirstLetter(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }
//   getFirstLetters(n, s) {
//     return `${n[0].toUpperCase()}. ${s[0].toUpperCase()}.`;
//   }
//   showInit() {
//     return this.getFirstLetters(this.name, this.surn);
//   }
// }
// const newSt = new Student('serg', 'sisov', 1000);
// // console.log(newSt.show());
// // console.log(newSt.showInit());

// // console.log(newSt.getSalary());
// console.log(newSt.getName());

class Employee {
  #name;
  #salary;
  #age;
  setName(name) {
    if (name.length > 0) {
      this.#name = name;
    } else {
      throw new Error('name is incorrect');
    }
  }
  set Salary(salary) {
    if (salary > 100) {
      this.#salary = salary;
    }
  }
  set Age(age) {
    if (age > 0 && age < 120) {
      this.#age = age;
    } else {
      throw new Error('age is incorrect');
    }
  }
  get Age() {
    return this.#age;
  }
  get Salary() {
    return this.#addSign(this.#salary);
  }
  #addSign(num) {
    return num + '$';
  }
}
let worker = new Employee();
worker.setAge(456);
console.log(worker.getSalary());
console.log(worker.getAge());

class Student {
  constructor(name) {
    this.name = name;
  }
}
class Employee {
  constructor(name) {
    this.name = name;
  }
}

let users = [
  new Student('user1'),
  new Employee('user2'),
  new Student('user3'),
  new Employee('user4'),
  new Student('user5'),
  new Employee('user6'),
  new Student('user7'),
];
users.forEach((elem) => {
  if (elem instanceof Employee) {
    console.log(elem);
  }
});
