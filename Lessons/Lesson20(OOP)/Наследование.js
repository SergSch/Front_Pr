class Drive {
  constructor(model, year) {
    this.model = model;
    this.year = year;
    this.speed = 0;
  }
  driving(speed) {
    this.speed = speed;
    console.log(`${this.model} is going to ${this.speed} km/h`);
  }
  parking() {
    this.speed = 0;
    console.log(`${this.model} has parking`);
  }
}

// let tesla = new Drive('Tesla');
// tesla.driving(100);
// tesla.parking();
// console.log(tesla);

// Наследование происходит благодаря оператору extends с указанием имя наследуемого класса
// Для того, чтобы унаследовать и использовать аргументы конструктора для формирования сво-ва (так же как это было реализованы в наследуемом классе)
// необходимо также его полуить и поместить в метод super()

class Car extends Drive {
  constructor(model, year) {
    super(model, year);
    this.light = false;
  }
  setLight() {
    this.light = !this.light;
    console.log(`${this.model} ${this.light ? 'включил' : 'выключил'} свет`);
  }
}

// ---------------------------------
// Из файла Введение в классы.js скопируйте класс MathNumb и создайте новый класс,
// который будет называться NewNumb. Новый класс должен унаследовать все сво-ва и методы, а также
// должен определять новый метод: getSqrt(), который должен будет в консоль отобразить корень сов-ва number
class MathNumb {
  constructor(number) {
    this.number = number;
  }
  getDouble() {
    let res = this.number ** 2;
    console.log(res);
  }
  setQuadNumber() {
    this.number = this.number ** 4;
  }
}

class NewNumb extends MathNumb {
  constructor(number) {
    super(number);
  }
  getSqrt() {
    console.log(Math.sqrt(this.number));
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}
console.log(Object.getOwnPropertyNames(User.prototype));
