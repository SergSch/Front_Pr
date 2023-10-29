// код пишем здесь!
// 4. Пишем свойство-геттер `shortName`. Нужно сделать так, чтобы при обращении к свойству `shortName` объекта товара, мы бы получали строку вида `name, price` (то есть название и цену товара через запятую).

// 5. Реализуем логику сеттера. Нужно, чтобы каждый раз, когда мы пытаемся изменить цену товара, в консоль выводилось бы сообщение "Цена товара `name` меняется с `price` на `newPrice`".

// 1. Добавляем в класс `Product` приватное свойство, закупочную цену (`purchasePrice`). Она должна быть доступна только внутри класса. Нужно ее определять при создании объекта, как 0.9 * price.

// 2. Пишем методы для управления `purchasePrice`, то есть геттер и сеттер.

// 3. Сделаем метод расчета закупочной цены `calculatePurchasePrice`. Метод должен быть доступен только внутри класса. И нужно его вызывать при вызове конструктора - собственно, для расчета закупочной цены.

// 6. Теперь делаем "протокол изменения цены" товара. Мы можем изменять цену товара. И нужно чтобы каждый товар хранил в себе массив со всеми значениями цены. Этот массив НЕ должен быть доступен "вне" класса. И каждый раз при изменении цены, нам нужно заносить в массив предыдущее значение цены. В этом нам помогут приватные свойства и сеттеры.

// 7. Реализуем "счетчик" созданных товаров. Нам нужно сделать так, чтобы каждый раз при создании товара (вызове конструктора), мы бы увеличивали счетчик. Счетчик должен быть ОДИН на все объекты, то есть не привязан к объектам (статический).

// 8. Теперь пришла пора сделать наш счетчик "скрытым" - то есть, сделать так, чтобы он был недоступен вне класса.

class Product {
  #purchasePrice;
  #counter = 0;
  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.#counter++;
  }
  get shortName() {
    return `${this.name}, ${this.price}`;
  }
  set changePrice(newPrice) {
    this.price = newPrice;
    console.log(
      `Цена товара ${this.name} меняется с ${this.price} на ${(this.price =
        newPrice)}`
    );
  }
  #calculatePurchasePrice(price) {
    this.#purchasePrice = 0.9 * price;
  }
  get getPurchasePrice() {
    return `Dangerous ${this.#purchasePrice}`;
  }
  set sellingPrice(arg) {
    this.price = arg * 1.15;
  }
  set setPurchasePrice(arg) {
    this.#purchasePrice = arg;
  }
  print() {
    console.log(`Product ${this.name}, price - ${this.price}`);
  }
}

let newProduct = new Product(1, 'someSuplly', 100, 'good Supply');
let newProduct1 = new Product(2, 'someSuplly1', 1000, 'good Supply12');
newProduct.changePrice = 200;
console.log(newProduct);
newProduct.setPurchasePrice = 10000;
console.log(Product);

// --------------
// newProduct.sellingPrice = 150;
// console.log(newProduct);
// ---------------

// newProduct.#calculatePurchasePrice();

class PowerTool extends Product {
  constructor(id, name, price, description, power, warranty) {
    super(id, name, price, description);
    this.power = power;
    this.warranty = warranty;
  }

  print() {
    super.print();
    console.log(`Power: ${this.power} kW`);
  }
}

class Tool extends Product {
  constructor(id, name, price, description, strength) {
    super(id, name, price, description);
    this.strength = strength;
  }

  print() {
    super.print();
    console.log(`Strength: ${this.strength}`);
  }
}
