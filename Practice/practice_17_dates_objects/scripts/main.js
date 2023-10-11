// код пишем здесь.

const car1 = {
  model: 'Lada',
  type: 'sedan',
  color: 'baklazhan',
  manufactured: 1989,
};

const car2 = {
  model: 'Lada',
  type: 'sedan',
  color: 'baklazhan',
  manufactured: 1989,
};

const car3 = car1;

// const dwarf = {
//   name: 'Karst',
//   level: 12,
//   fraction: 'Dwarwes',
//   skills: {
//     magic: 0,
//     melee: 11,
//     archery: 0,
//   },
// };

// 1. Пристрелочная задача. Вывести в консоль текущие время и дату, в формате местной локализации.
// let date = new Date();
// console.log(date.toLocaleString());

// -------------------------------------------

// 2. Добавляем это на страницу. У нас есть элемент с классом `dateTimeHeader`, нужно записать в него текст с текущими датой и временем.

const dateTimeHeader = document.querySelector('.dateTimeHeader');

// --------------------------------------------

// 3. Добавляем динамики. Нужно, чтобы наш параграф отображал актуальное время с точностью до секунды. Для этого, текст в параграфе нужно ежесекундно обновлять.

// 4. Изменяем текстовку. Теперь дату и время выводим так: "Сегодня 9-е число 10-го месяца 2023 года, текущее время 14:10". То есть, нам нужно работать с частями дат.

const time = () => {
  let date = new Date();
  dateTimeHeader.textContent = `Сегодня: ${date.getDate()} число ${
    date.getMonth() + 1
  }-го месяца ${date.getFullYear()} года, текущее время ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
time();
setInterval(time, 1000);

// ---------------------------------------------------------------

// 5. Пишем функцию `isAdult`, которая проверит, является ли пользователь совершеннолетним. Она принимает на вход день, месяц, и год рождения пользователя. И задача - проверить, есть ли пользователю 18 лет. Подсказка, как это сделать: нужно посчитать дату совершеннолетия пользователя, и проверить, что текущая дата больше даты совершеннолетия.

function isAdult(day, month, year) {
  let birthday = new Date(year + 18, month - 1, day);
  let currentDate = new Date();
  return currentDate > birthday;
}
console.log(isAdult(5, 4, 2015));

// --------------------------------------------------------

// 6. Бонусная задача. Вывести в консоль разницу во времени между UTC и своей временной зоной.
let currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getTimezoneOffset());

// -------------------------------------------------------

// 7. Переходим к объектам. У нас есть несколько тестовых объектов. Создайте копию объекта `car2` - так чтобы она содержала те же свойства и значения что и оригинал.

let car5 = { ...car2 };
console.log(car5);

// ---------------------------------------------------
// 8. Работаем с более сложным объектом. У нас есть объект `dwarf` - персонаж компьютерной игры, гном. Нужно создать его "глубокую" копию `dwarfClone`, но при этом его свойство `name` должно быть `Torin`, а его навык в рукопашной (`melee`) должен быть 15.
const dwarf = {
  name: 'Karst',
  level: 12,
  fraction: 'Dwarwes',
  skills: {
    magic: 0,
    melee: 17,
    archery: 0,
  },
};

const dwarfCopy = {
  ...dwarf,
  name: 'Torin',
  skills: {
    ...dwarf.skills,
    melee: 18,
  },
};

// const dwarfClone1 = JSON.parse(JSON.stringify(dwarf));
// console.log(dwarfClone1)

// console.log(dwarf, dwarfCopy);

// ---------------------------------------------------------

// 9. Теперь, напишем функцию `dwarwesFight` - она принимает в аргументах двух гномов, и должна определить, кто из них лучше в рукопашной (то есть, у кого из них значение `melee` больше). И вывести в консоль победителя. Для определения ОБЯЗАТЕЛЬНО использовать деструктурирующее присваивание!

function dwarwesFight(first, second) {
  let {
    skills: { meele: firstDwarfMelee },
  } = first;
  let {
    skills: { melee: secondDwarfMelee },
  } = second;
  if (firstDwarfMelee > secondDwarfMelee) {
    console.log('First dwarf is stronger!');
  } else {
    console.log('Second dwarf is stronger!');
  }
}
dwarwesFight(dwarf, dwarfCopy);

// ----------------------------------------------------

// 10. Перепишем функцию `dwarwesFight` - нужно чтобы она принимала произвольное число гномов, и определяла лучшего мечника (то есть, у кого из них навык `melee` прокачан лучше всех). В этом нам также поможет `rest`-оператор (`...`).

function dwarwesFight(...dwarfs) {
  let maxMelee = dwarfs[0].skills.melee;
  let strongestDwarf = 0;
  dwarfs.forEach((dwarf, i) => {
    if (dwarf.skills.melee > maxMelee) {
      strongestDwarf = i;
    }
  });
  return `The most strongest dwarf is number ${strongestDwarf}`;
}
console.log(dwarwesFight(dwarf, dwarfCopy));

// -------------------------------------------------------------

// 11. У нас есть массив `baseDwarfWeapons`, который содержит оружие, которым умеет владеть среднестатистический гном. Нужно записать в переменные `weapon1`, `weapon2` соответственно первое и второе виды оружия, которыми владеет гном. При этом, использовать деструктурирующее присваивание!

// 12. Сделать то же самое для 3-го и 4-го видов оружия.

const baseDwarfWeapons = [
  {
    type: 'melee',
    name: 'Sword',
  },
  {
    type: 'melee',
    name: 'Axe',
  },
  {
    type: 'melee',
    name: 'Spear',
  },
  {
    type: 'melee',
    name: 'Flail',
  },
  {
    type: 'archery',
    name: 'crossbow',
  },
];

// let [weapon1, weapon2] = baseDwarfWeapons;
// let [, , weapon3, weapon4] = baseDwarfWeapons;
// console.log(weapon1);
// console.log(weapon2);
// console.log(weapon3);
// console.log(weapon4);

// ---------------------------------------------
// 13. Запишем в свойство `weapons` нашего гнома Карста копию массива `baseDwarfWeapons`.

// 14. А в свойство `weapons` Торина запишем только те виды оружия, которые относятся к типу рукопашной (`type === melee`).

const dwarf = {
  name: 'Karst',
  level: 12,
  fraction: 'Dwarwes',
  skills: {
    magic: 0,
    melee: 17,
    archery: 0,
  },
};
dwarf.weapon = [...baseDwarfWeapons];
console.log(dwarf);

// ---------------------------------------------------------

const dwarfCopy = {
  ...dwarf,
  name: 'Torin',
  skills: {
    ...dwarf.skills,
    melee: 18,
  },
};
dwarfCopy.weapon = dwarfCopy.weapon.filter((elem) => elem.type == 'melee');
console.log(dwarfCopy);
