// код пишем здесь.
// 1. Пристрелочная задача. У нас есть объект `simpleDwarf`. Нужно создать его ГЛУБОКУЮ копию такими способами:
//  - с использованием `spread`-оператора
//  - с использованием `Object.assign`
//  - с использованием сериализации и десериализации (JSON)
const simpleDwarf = {
  name: 'Torin',
  level: 15,
  fraction: 'Dwarwes',
};

let simpleDwarf1 = { ...simpleDwarf };
simpleDwarf1.level = 20;
console.log(simpleDwarf);
console.log(simpleDwarf1);
// ----------
const simpleDwarf2 = Object.assign({}, simpleDwarf);
simpleDwarf2.level = 25;
console.log(simpleDwarf);
console.log(simpleDwarf2);
// -----------

const simpleDwarf3 = JSON.parse(JSON.stringify(simpleDwarf));
simpleDwarf3.level = 30;
console.log(simpleDwarf);
console.log(simpleDwarf3);
// ---------------------------------------------------------------
// 2. Усложняем задачу. Теперь нужно сделать глубокую копию объекта `middleDwarf`. Также, тремя способами.
const middleDwarf = {
  name: 'Balin',
  level: 14,
  fraction: 'Dwarwes',
  skills: {
    melee: 13,
    archery: 2,
  },
};
const copy = structuredClone(middleDwarf);
copy.skills.melee = 50;
console.log(middleDwarf);
console.log(copy);

let middleDwarf1 = { ...middleDwarf };
middleDwarf1.skills = { ...middleDwarf.skills };
middleDwarf1.skills.melee = 20;
console.log(middleDwarf);
console.log(middleDwarf1);
// ----------
const middleDwarf2 = Object.assign({}, middleDwarf);
middleDwarf2.skills = Object.assign({}, middleDwarf.skills);
middleDwarf2.skills.melee = 25;
console.log(middleDwarf);
console.log(middleDwarf2);
// -----------

const middleDwarf3 = JSON.parse(JSON.stringify(middleDwarf));
middleDwarf3.skills.melee = 30;
console.log(middleDwarf);
console.log(middleDwarf3);

// --------------------------------------------------

const seriousDwarf = {
  name: 'Karst',
  level: 12,
  fraction: 'Dwarwes',
  weapons: {
    sword: {
      type: 'melee',
      skill: 12,
    },
    axe: {
      type: 'melee',
      skill: 14,
    },
    crossbow: {
      type: 'archery',
      skill: 3,
    },
  },
};

const DWARWES_AREAS = {
  Moria: {
    population: 1000,
    king: 'Balin',
  },
  IronHills: {
    population: 50000,
    king: 'Dain',
  },
  Erebor: {
    population: 34000,
    king: 'Tror',
  },
};

// 3. Теперь поработаем с методами объектов. У нас есть объект `DWARWES_AREAS`, который содержит данные о местах проживания гномов. Нужно создать массив, в котором будут содержаться только названия локаций (то есть, ключи объекта `DWARWES_AREAS`), отсортировать его в алфавитном порядке, и вывести в консоль.
const DWARWES_AREAS = {
  Moria: {
    population: 1000,
    king: 'Balin',
  },
  IronHills: {
    population: 50000,
    king: 'Dain',
  },
  Erebor: {
    population: 34000,
    king: 'Tror',
  },
};
const areas = Object.keys(DWARWES_AREAS).sort();
console.log(areas);

// ----------------------------------------------------
// 4. Теперь создаем массив объектов с данными о местах проживания гномов (значения ключей объекта `DWARWES_AREAS`), сортируем его по возрастанию населения (`population`), и выводим в консоль.

const DWARWES_AREAS = {
  Moria: {
    population: 1000,
    king: 'Balin',
  },
  IronHills: {
    population: 50000,
    king: 'Dain',
  },
  Erebor: {
    population: 34000,
    king: 'Tror',
  },
};
const places = Object.values(DWARWES_AREAS).sort(
  (a, b) => a.population - b.population
);
console.log(places);

// ------------------------------------------------

// 5. Нужно получить массив всех гномьих королей. То есть, пройтись по свойствам объекта `DWARWES_AREAS`, взять из каждого данные по королю, и сложить в массив. Результат вывести в консоль.
const DWARWES_AREAS = {
  Moria: {
    population: 1000,
    king: 'Balin',
  },
  IronHills: {
    population: 50000,
    king: 'Dain',
  },
  Erebor: {
    population: 34000,
    king: 'Tror',
  },
};
let names = Object.values(DWARWES_AREAS).map((elem) => elem.king);
console.log(names);

// --------------------------------------------------
// 6. Собираем данные по королям и локациям. Нужно получить объект, где в качестве ключей будут использоваться локации, а в качестве значений  - имя правителя этой локации.
// {
//   Moria: Balin,
//   IronHills: Dain,
//   Erebor: Tror
// }
let res = {};
Object.entries(DWARWES_AREAS).forEach((elem) => {
  res[elem[0]] = elem[1].king;
});

let result = {};
Object.entries(DWARWES_AREAS).forEach(([key, value]) => {
  result[key] = value.king;
});

let result1 = Object.entries(DWARWES_AREAS).reduce((accum, [key, value]) => {
  accum[key] = value.king;
  return accum;
}, {});

console.log(res);

// --------------------------------------------------------
// 7. Сделаем тренажер гномов. Пишем функцию `dwarfMeleeTraining`. Она примет на вход объект-гнома. У гнома есть ОБЪЕКТ `weapons`, где содержатся данные о его вооружении и умении им владеть. Нужно пройтись по значениям этого объекта, и для каждого оружия с `type = melee` увеличить `skill` на 1. То есть, учим гномов рукопашной. При этом, нужно выводить в консоль протокол: вида "sword skll had been increased!".
const seriousDwarf = {
  name: 'Karst',
  level: 12,
  fraction: 'Dwarwes',
  weapons: {
    sword: {
      type: 'melee',
      skill: 12,
    },
    axe: {
      type: 'melee',
      skill: 14,
    },
    crossbow: {
      type: 'archery',
      skill: 3,
    },
  },
};
function dwarfMeleeTraining(obj) {
  Object.entries(obj.weapons).forEach(([weaponName, data]) => {
    if (data.type == 'melee') {
      console.log(`${weaponName} sword skll had been increased!`);
      data.skill += 1;
    }
  });
}
dwarfMeleeTraining(seriousDwarf);
console.log(seriousDwarf);

// ----------------------------------------------

// 8. Теперь пишем функцию `archeryControl` - она должна определить вооружения дальнего боя у гнома. Принимает на вход объект-гнома, и должна вернуть массив, который содержит названия вооружений, у которых категория - `archery`.

const seriousDwarf = {
  name: 'Karst',
  level: 12,
  fraction: 'Dwarwes',
  weapons: {
    sword: {
      type: 'melee',
      skill: 12,
    },
    axe: {
      type: 'melee',
      skill: 14,
    },
    crossbow: {
      type: 'archery',
      skill: 3,
    },
  },
};

function archeryControl(obj) {
  let arr = [];
  Object.entries(obj.weapons).forEach(([name, data]) => {
    if (data.type == 'archery') {
      arr.push(name);
    }
  });
  return arr;
}
console.log(archeryControl(seriousDwarf));

function archeryControl1(dwarf) {
  return Object.values(dwarf.weapons).filter(
    (weapon) => weapon.type === 'archery'
  );
}
console.log(archeryControl1(seriousDwarf));

// ------------------------------------------------------------------
// 9. И напишем функцию `getDwarfSkills`. Она будет определять суммарный навык гнома по владению оружием в категории. В аргументах - все тот же гном. Задача - пройтись по его оружию, и на выходе получить объект, в котором будут суммарные навыки по категориям.
// Expected result:
// {
//    melee: 26,
//    archery: 3
// }
const seriousDwarf = {
  name: 'Karst',
  level: 12,
  fraction: 'Dwarwes',
  weapons: {
    sword: {
      type: 'melee',
      skill: 12,
    },
    axe: {
      type: 'melee',
      skill: 14,
    },
    crossbow: {
      type: 'archery',
      skill: 3,
    },
  },
};

// function getDwarfSkills(dwarf) {
//   const weapons = dwarf.weapons;
//   const skillByCategory = {};

//   for (const weaponName in weapons) {
//     const weapon = weapons[weaponName];
//     const category = weapon.type;
//     const skill = weapon.skill;

//     if (skillByCategory[category]) {
//       skillByCategory[category] += skill;
//     } else {
//       skillByCategory[category] = skill;
//     }
//   }

//   return skillByCategory;
// }
// const dwarfSkills = getDwarfSkills(seriousDwarf);
// console.log(dwarfSkills);

const seriousDwarf = {
  name: 'Karst',
  level: 12,
  fraction: 'Dwarwes',
  weapons: {
    sword: {
      type: 'melee',
      skill: 12,
    },
    axe: {
      type: 'melee',
      skill: 14,
    },
    crossbow: {
      type: 'archery',
      skill: 3,
    },
  },
};

function getDwarfSkills(obj) {
  let new_arr = Object.entries(obj.weapons).reduce(
    (acc, [weaponName, weaponData]) => {
      acc[weaponData.type] = (acc[weaponData.type] || 0) + weaponData.skill;
      return acc;
    },
    {}
  );
  return new_arr;
}
console.log(getDwarfSkills(seriousDwarf));

function getDwarfSkills(obj) {
  const arr = Object.entries(obj.weapons);
  const weapons = arr.map((elem) => elem.slice(1));
  const arr1 = [];
  for (let i of weapons) {
    arr1.push(...i);
  }
  let res = arr1.reduce((acc, elem) => {
    acc[elem.type] = (acc[elem.type] || 0) + elem.skill;
    return acc;
  }, {});
  return res;
}
console.log(getDwarfSkills(seriousDwarf));
