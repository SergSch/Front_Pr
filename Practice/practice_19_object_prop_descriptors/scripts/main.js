// код пишем здесь!

// const dwarfTorin = {
//   name: 'Torin',
//   age: 320,
//   skills: ['melee', 'magic'],
//   weapons: {
//     sword: {
//       type: 'melee',
//       skill: 14,
//     },
//     axe: {
//       type: 'melee',
//       skill: 18,
//     },
//     crossbow: {
//       type: 'archery',
//       skill: 3,
//     },
//     knife: {
//       type: 'melee',
//       skill: 11,
//       allowed: true,
//     },
//   },
// };

// 1. У нас есть объект `dwarfTorin` - гном Торин. Нужно сделать так, чтобы его имя было невозможно изменить (т.е. сделать свойство `name` неизменяемым).

// 2. Пишем функцию `takeWeaponsAway` - разоружение гнома на входе в замок. Она должна принять на вход объект-гнома, пройтись по его свойству `weapons` (можно `for..in`, а лучше - методами объекта), и вернуть массив с гномьим оружием.
// ```
// const dwarfTorin = {
//   name: 'Torin',
//   age: 320,
//   skills: ['melee', 'magic'],
//   weapons: {
//     sword: {
//       type: 'melee',
//       skill: 14
//     },
//     axe: {
//       type: 'melee',
//       skill: 18
//     },
//     crossbow: {
//       type: 'archery',
//       skill: 3
//     }
//   }
// }

// takeAwayWeapons(dwarfTorin); // ['sword', 'axe', 'crossbow']
// ```

// 3. Усложняем нашу функцию - надо забрать у гнома все его оружие, кроме того, которое разрешено (`allowed = true`). Нужно чтобы наша функция теперь удаляла из `dwarf.weapons` все свойства, которые содержат запрещенное оружие, и возвращала бы объект с этим оружием.

// 4. Гному негоже расставаться с любимым топором. Поэтому, нужно спрятать топор от функции `takeWeaponsAway`. Нужно сделать так, чтобы это свойство стало неперечислимым, и функция его не заметила.

const dwarfTorin = {
  name: 'Torin',
  age: 320,
  skills: ['melee', 'magic'],
  weapons: {
    sword: {
      type: 'melee',
      skill: 14,
    },
    axe: {
      type: 'melee',
      skill: 18,
    },
    crossbow: {
      type: 'archery',
      skill: 3,
    },
    knife: {
      type: 'melee',
      skill: 11,
      allowed: true,
    },
  },
};

const takeAwayWeapons = (obj) => {
  let weaponLager = {};
  Object.entries(obj.weapons).forEach((elem) => {
    const weaponKey = elem[0];
    const weaponVal = elem[1];
    if (!weaponVal.allowed) {
      delete obj.weapons[weaponKey];
      weaponLager[weaponKey] = weaponVal;
    }
  });
  return weaponLager;
};
// Object.defineProperty(dwarfTorin, 'name', { writable: false });
// Object.defineProperty(dwarfTorin.weapons, 'axe', { enumerable: false });
console.log(takeAwayWeapons(dwarfTorin));
// console.log(dwarfTorin);

// -------------------------------------------------
// 5. Пишем функцию `hideWeapon`, которая будет помогать нашим гномам прятать оружие от замковой стражи. Она должна принять на вход объект-гнома `dwarf`, и массив вооружений, которые гном хочет скрыть. Нужно сделать эти свойства в `dwarf.weapons` неперечислимыми.

const hideWeapon = (obj, arr) => {
  arr.forEach((elem) => {
    Object.defineProperty(obj.weapons, elem, { enumerable: false });
  });
};
hideWeapon(dwarfTorin, ['sword', 'axe']);
console.log(dwarfTorin);

// ---------------------------------------

// 6. Родовитым гномам дарованы некие вольности при дворе, поэтому никто не имеет права забрать у Торина его меч. Нужно сделать так, чтобы не было возможности изъять у храброго гнома родовое оружие - то есть, сделать это свойство не-конфигурируемым.
// Object.defineProperty(dwarfTorin.weapons, 'sword', { configurable: false });

// ----------------------------------------

// 7. Не все стражи замка одинаково уважают права гномов. Поэтому, отдельные непорядочные личности решили подменить родовой меч гнома (то есть присвоить свойству `sword` другое значение). Нужно этому воспрепятствовать - то есть, сделать это свойство "только для чтения".

// Object.defineProperty(dwarfTorin.weapons, 'sword', { writable: false });

// --------------------------------------------

// 8. Гномов в замок приходит все больше, началась путаница с вооружением. Пришла пора создать арсенал (объект `WEAPON_STORAGE`). Теперь, функция `takeWeaponsAway` должна складывать оружие гнома в арсенале. То есть, создавать у объекта `WEAPON_STORAGE` свойство, у которго в качестве ключа будет имя гнома, а в качестве значения - изъятое оружие.
const dwarfTorin = {
  name: 'Torin',
  age: 320,
  skills: ['melee', 'magic'],
  weapons: {
    sword: {
      type: 'melee',
      skill: 14,
    },
    axe: {
      type: 'melee',
      skill: 18,
    },
    crossbow: {
      type: 'archery',
      skill: 3,
    },
    knife: {
      type: 'melee',
      skill: 11,
      allowed: true,
    },
  },
};

const WEAPON_STORAGE = {};
const takeAwayWeapons1 = (obj) => {
  Object.entries(obj.weapons).forEach(([weaponKey, weaponVal]) => {
    if (WEAPON_STORAGE[obj.name]) {
      WEAPON_STORAGE[obj.name][weaponKey] = weaponVal;
    } else {
      WEAPON_STORAGE[obj.name] = { [weaponKey]: weaponVal };
    }
    delete obj.weapons[weaponKey];
  });
};
takeAwayWeapons1(dwarfTorin);
console.log(WEAPON_STORAGE);
// let { Torin: weaponDwarf, ...weaponSt } = WEAPON_STORAGE;
console.log(dwarfTorin);

// 9. И наконец, возвращаем гному его оружие. Пишем функцию `returnWeapons` - она принимает на вход объект-гнома,  и должна вернуть ему его вооружение из арсенала.
// const returnWeapons = (obj) => {
//   obj.weapons = weaponDwarf;
//   return obj;
// };
const returnWeapons = (obj) => {
  const weaponsFromStorage = WEAPON_STORAGE[obj.name]; // берем оружие в арсенале по имени гнома
  Object.assign(obj.weapons, weaponsFromStorage);
  return obj;
};
returnWeapons(dwarfTorin);
console.log(dwarfTorin);

// Can you tell us something about yourself?
// What did you learn during your time at university?
// What kinds of things do you worry about?
// Would you say you’re an ambitious person?
