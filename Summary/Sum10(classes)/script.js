// ================Task1==============

// 1. Реализовать класс Car со следующими свойствами:
// name (бренд), model (модель), color, volume (объем двигателя), country (страна производства)
// Создать экземпляр класа Car
// Реализовать метод get_info(), который выводит в консоль сообщение по шаблону: Car: brand_name (model), Color: color, Voulume: volume, Origin country: country
// Реализовать метод incr_volume(), который будет умножать значение свойства volume на переданное число

class Car {
  constructor(name, model, color, volume, country) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.volume = volume;
    this.country = country;
  }
  getInfo() {
    console.log(
      `Car: ${this.name} ${this.model}, Color: ${this.color}, Volume: ${this.volume}, Origin Country: ${this.country}`
    );
  }
  double_volume() {
    this.volume = this.volume * 2;
  }
  incr_volume(num) {
    this.volume = this.volume * num;
  }
  change_color(newColor) {
    this.color = newColor;
  }
}
// Вывести в консоль все свойства созданного экземпляра класса (объекта)
// У экземпляра класса car_1 заменить color на red
// У экземпляра класса car_1 создать новое свойство production_year и задать значение 2010

const car_1 = new Car('Toyota', 'RAV4', 'White', 2.0, 'Japan');
const car_2 = new Car('BMW', 'm6', 'Black', 2.5, 'Germany');
car_1.color = 'red';
car_1.production_year = 2022;
console.log(car_2);

// car_1.double_volume();
car_1.change_color('green');
car_1.incr_volume(3);
console.log(car_1);
car_1.getInfo();
car_2.getInfo();

// Task2 ----------------------------------------------------------------
// ЗАДАЧА 2
// Реализуйте класс Worker (Работник), который будет иметь следующие свойства:
// name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
// Создать 2 экземпляра класса Worker
// Если работник проработал более 15 дней, то к его ставке применчется повышающий коэффициент 1.5
// Создать метод get_salary(), который будет возвращать сообщение в формате: NAME's salary is SALARY
// Примечание: SALARY = rate * days
// Реализуйте два метода:
// - add_days() - увеличивает кол-во дней на переданное значение
// - delete_days() - уменьшает кол-во дней на переданное значение
class Worker {
  constructor(name, surename, rate, days) {
    this.name = name;
    this.surename = surename;
    this.days = days;
    if (days > 15) {
      this.rate = rate * 1.5;
    } else {
      this.rate = rate;
    }
  }
  getSalary() {
    this.salary = this.rate * this.days;
    return `${this.name}'s salary is ${this.salary}`;
  }
  addDays(num) {
    this.days += num;
    this.getSalary();
  }
  deletedays(num) {
    this.days -= num;
    this.getSalary();
  }
}
const worker1 = new Worker('John', 'Kennedy', 150, 20);
const worker2 = new Worker('Henry', 'Ford', 200, 14);

worker1.addDays(10);
worker2.deletedays(3);
console.log(worker1.getSalary());
console.log(worker2.getSalary());
console.log(worker1);
console.log(worker2);
