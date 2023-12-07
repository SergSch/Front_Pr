class Person {
  constructor(firstName, laststName, age) {
    this.firstName = firstName;
    this.laststName = laststName;
    this.age = age;
    this.profession = programmer;
  }
  email() {
    return this.firstName + '.' + this.laststName + '@mail.com';
  }
  incrementAge() {
    return (this.age += 1);
  }
}

let person1 = new Person('Joe', 'Rogan', 53);
let person2 = new Person('Jessika', 'Mort', 33);
console.log(person1.email());
console.log(person2.incrementAge());
