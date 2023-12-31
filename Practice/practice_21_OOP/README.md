# README

## Практическое занятие №20

### Тема: Основы объектно-ориентированного программирования в JavaScript. Наследование классов.

Репозитарий содержит материалы по практическому занятию №20, посвященному наследованию классов в JavaScript.

### Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

### Задачи занятия
1. Работаем в предметной области интернет-магазина, теперь мы торгуем инструментами. Нам нужно спроектировать и реализовать структуру классов для работы с нашими товарами. В интернет-магазине доступны такие товары, как:
 - электроинструмент `PowerTool` (электропила, дрель)
 - ручной инструмент `Tool` (молоток, плоскогубцы)

У каждого товара есть название (`name`), ID, цена за единицу (`price`), краткое описание (`description`). Нужно создать класс для представления товара (`Product`). У класса должен быть определен конструктор, который принимает все описанные параметры.
2. У каждого электроинструмента есть значение потребляемой мощности (Вт) - `power`, и гарантийный срок - `warranty`. А у каждого ручного инструмента есть показатель прочности материала `strength` (измеряемый в целочисленных условных единицах). При этом, и электроинструменты, и ручные инструменты остаются товарами. Нам нужно создать классы для представления электроинструмента и ручного инструмента, и при этом:
 - сделать так, чтобы они также являлись и товарами - т.е. унаследоваться от класса `Product`.
 - определить для каждого класса конструктор  с соответствующим набором параметров. Важно не забыть про конструктор родительского класса!
3. Добавляем методы. У каждого товара должен быть определен метод `print`, который выводит в консоль информацию о товаре. Информацию выводить следующим образом: "Товар НАЗВАНИЕ_ТОВАРА, цена - ЦЕНА_ТОВАРА".
4. Создать один объект класса `Product`, с названием Product, ценой 10, и описанием "Test product", и вызвать для него метод print.
5. Переопределяем метод `print` для класса электроинструмента. Он должен вывести название название и цену, а также мощность электроинструмента. Пример:
```
let electricSaw = new PowerTool(1, "Electric Saw", 250, "Makita forewer!", 2.2, 1);
electricSaw.print();
```
Ожидаемый результат:
```
Товар Electric Saw, цена - 250.
Мощность - 2.2 киловатт.
```
Будет очень хорошо, если метод `print` класса PowerTool будет вызывать метод `print` класса-родителя (через ключевое слово `super`).
6. Аналогичным образом переопределяем метод `print` для класса Tool. Нужно вывести название, цену и прочность товара.
Ожидаемый результат:
```
Товар Hammer, цена - 80.
Прочность - 65.
```
7. Определяем приватное свойство у товара - закупочная стоимость (`purchasePrice`). Нужно сделать так, чтобы это свойство было недоступно "снаружи" класса. Подсказка - нужно воспользоваться специальной нотацией # (т.е название свойства начинается с этого символа).
8. Теперь нам нужно дать возможность работы с этим приватным свойством. Для этого, напишем геттер и сеттер для этого свойства (`getPurchasePrice`, `setPurchasePrice`).
9. Добавляем функциональность для рендеринга. Каждый товар рендерится в виде карточки, в `div`-элементе, и у каждого товара есть название и цена. Добавляем в класс `Product` метод `render`. Он должен вернуть div, с классом product-card. Внутри этого div-a, должны быть 2 элемента - название (`h3.productName`) и цена (`p.productPrice`). Заполнить текст этих элементов соответствующими значениями.
10. У класса `PowerTool`, нужно этот метод переопределить. В div с названием и ценой, который нам рендерит класс-родитель, нужно добавить поле "Потребляемая мощность", класс `productPower`.
11. У класса `Tool`, также нужно переопределить метод render. В div с названием и ценой, который нам рендерит класс-родитель, нужно добавить поле "прочность", класс `productStrength`.


### Полезные ссылки по занятию:
 - Русскоязычный гайд по [наследованию](https://learn.javascript.ru/class-inheritance).
 - Еще русскоязычный гайд с примерами по [наследованию](https://metanit.com/web/javascript/4.15.php).
 - Спецификация MDN по [приватным свойствам](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)