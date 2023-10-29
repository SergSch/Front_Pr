// код пишем здесь!
// 1. Работаем в предметной области интернет-магазина, теперь мы торгуем инструментами. Нам нужно спроектировать и реализовать структуру классов для работы с нашими товарами. В интернет-магазине доступны такие товары, как:
//  - электроинструмент `PowerTool` (электропила, дрель)
//  - ручной инструмент `Tool` (молоток, плоскогубцы)

// У каждого товара есть название (`name`), ID, цена за единицу (`price`), краткое описание (`description`). Нужно создать класс для представления товара (`Product`). У класса должен быть определен конструктор, который принимает все описанные параметры.

// 7. Определяем приватное свойство у товара - закупочная стоимость (`purchasePrice`). Нужно сделать так, чтобы это свойство было недоступно "снаружи" класса. Подсказка - нужно воспользоваться специальной нотацией # (т.е название свойства начинается с этого символа).

// 8. Теперь нам нужно дать возможность работы с этим приватным свойством. Для этого, напишем геттер и сеттер для этого свойства (`getPurchasePrice`, `setPurchasePrice`).

class Product {
  #purchasePrice;
  constructor(purchasePrice, id, name, price, description) {
    this.#purchasePrice = purchasePrice;
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
  get PurchasePrice() {
    return this.#purchasePrice;
  }
  set PurchasePrice(purchasePrice) {
    this.#purchasePrice = purchasePrice;
  }
  render() {
    const productContainer = document.createElement('div');
    productContainer.classList.add('productCard');
    const productNameHeader = document.createElement('h2');
    productNameHeader.textContent = this.name;
    const productPrice = document.createElement('h3');
    productPrice.textContent = this.price;
    productContainer.append(productNameHeader, productPrice);
    return productContainer;
  }

  print() {
    console.log(`Товар ${this.name}, цена - ${this.price}`);
  }
}

// 2. У каждого электроинструмента есть значение потребляемой мощности (Вт) - `power`, и гарантийный срок - `warranty`. А у каждого ручного инструмента есть показатель прочности материала `strength` (измеряемый в целочисленных условных единицах). При этом, и электроинструменты, и ручные инструменты остаются товарами. Нам нужно создать классы для представления электроинструмента и ручного инструмента, и при этом:
//  - сделать так, чтобы они также являлись и товарами - т.е. унаследоваться от класса `Product`.
//  - определить для каждого класса конструктор  с соответствующим набором параметров. Важно не забыть про конструктор родительского класса!

// 3. Добавляем методы. У каждого товара должен быть определен метод `print`, который выводит в консоль информацию о товаре. Информацию выводить следующим образом: "Товар НАЗВАНИЕ_ТОВАРА, цена - ЦЕНА_ТОВАРА".

// 5. Переопределяем метод `print` для класса электроинструмента. Он должен вывести название название и цену, а также мощность электроинструмента. Пример:
// let electricSaw = new PowerTool(1, "Electric Saw", 250, "Makita forewer!", 2.2, 1);
// electricSaw.print();
// Ожидаемый результат:
// Товар Electric Saw, цена - 250.
// Мощность - 2.2 киловатт.
// Будет очень хорошо, если метод `print` класса PowerTool будет вызывать метод `print` класса-родителя (через ключевое слово `super`).

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
  render() {
    const powerLabel = document.createElement('p');
    powerLabel.textContent = this.power;
    const parentContainer = super.render();
    parentContainer.append(powerLabel);
    return parentContainer;
  }
}

let electroSaw = new PowerTool(2, 'ElectroSaw', 30, 'SuperTool', 3.2, 5);
electroSaw.print();

class Tool extends Product {
  constructor(id, name, price, description, strength) {
    super(id, name, price, description);
    this.strength = strength;
  }
  print() {
    super.print();
    console.log(`Strength: ${this.strength}`);
  }
  render() {
    const strengthLabel = document.createElement('p');
    strengthLabel.textContent = this.strength;
    const parentContainer = super.render();
    parentContainer.append(strengthLabel);
    return parentContainer;
  }
}

// 4. Создать один объект класса `Product`, с названием Product, ценой 10, и описанием "Test product", и вызвать для него метод print.

let hammer = new Tool(1, 'Hammer', 10, 'Test product', 5);
hammer.print();
