// код пишем здесь!
// 1. Пристрелочная задача. Добавим в наш класс `Product` информацию о самом классе - то есть об авторе (author), и о дате создания (creationDate). Нужно это сделать так, чтобы эти данные были не привязаны к объектам класса, а принадлежали всему классу в целом. В этом нам помогут статические свойства.
// 2. Еще пристрелочная задача. Добавляем классу `Product` статический метод `describe` - он должен выводить в консоль информацию о нашем классе ("Class Product, created by _author_ at _creationDate_").
// 3. Реализуем "счетчик" созданных товаров (`instancesCounter`). Нам нужно сделать так, чтобы каждый раз при создании товара (вызове конструктора), мы бы увеличивали счетчик. Счетчик должен быть ОДИН на все объекты, то есть не привязан к объектам (статический). При этом, в конструкторе нам нужно обращаться к этому свойству только через имя класса!
// 4. Теперь нужно сделать наш счетчик приватным - чтобы он не был доступен напрямую "снаружи" класса. То есть, наш счетчик теперь будет и статическим, и приватным свойством. Также нужно добавить для него свойство-геттер.

// 5. Расширяем спектр использования статических методов. Введем ограничение по числу объектов класса. Нужно в классе `Product` определить приватное статическое свойство MAX_INSTANCES, которое будет содержать значение максимального количества объектов этого класса (по умолчанию - 2), которые можно создать. При вызове конструктора, проверять значение нашего счетчика из предыдущей задачи. Если текущее значение меньше MAX_INSTANCES - то увеличиваем на единицу наш счетчик. Иначе - нам нужно запретить создание экземпляра класса, то есть кинуть ошибку (`throw new Error()`), с текстом "Нельзя сотворить здесь!".
// 6. Добавляем сеттер `maxInstances` для свойства `MAX_INSTANCES`. Он также должен реализовать определенную логику: если мы пытаемся установить новое значение, которое меньше текущего значения счетчика - нужно запрещать это делать (кидать ошибку "Уже создано _счетчик_ объектов!").
// 7. Добавляем "утилитарный" метод для нашего класса `Product`. Делаем метод `getById(productId)`, который примет id товара и обратится к бэку по адресу `https://fakestoreapi.com/_productId_/`, запросит данные, и вернет результат. Это будет асинхронный метод, он должен будет возвращать промис, который будет зарезолвлен результатом запроса.

class Product {
  static #instancesCounter = 0;
  static #MAX_INSTANCES = 2;
  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    if (Product.#instancesCounter <= Product.#MAX_INSTANCES) {
      Product.#instancesCounter++;
    } else {
      throw new Error(`Нельзя сотворить здесь!`);
    }
  }
  static author = 'Sergey';
  static creationDate = '30.10.2023';
  static describe() {
    console.log(
      `Class Product, created by ${Product.author} at ${this.creationDate}`
    );
  }
  static get getinstancesCounter() {
    return `This is counter: ${this.#instancesCounter}`;
  }
  static set maxInstances(arg) {
    if (arg < Product.#instancesCounter) {
      throw new Error('Уже создано _счетчик_ объектов!');
    } else {
      this.#MAX_INSTANCES = arg;
    }
  }
  // static async getById(productId) {
  //   let url = `https://fakestoreapi.com/_productId_/${productId}`;
  //   let res = await fetch(url);
  //   let data = await res.json();
  //   return data;
  // }
  static getById(productId) {
    return new Promise((resolve, reject) => {
      fetch(`https://fakestoreapi.com/_productId_/${productId}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            reject(response);
          }
        })
        .then((respData) => resolve(respData))
        .catch((error) => reject(error));
    });
  }
}
Product.describe();
let firstProduct = new Product(1, 'Name1', 2, 'Descr');
let secondProduct = new Product(2, 'Name2', 3, 'Descr1');
// let thirdProduct = new Product(3, 'Name3', 4, 'Descr2');
// let fourthProduct = new Product(4, 'Name4', 5, 'Descr3');

Product.maxInstances = 1;
