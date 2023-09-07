let users = [
  {
    id: 1,
    name: 'Liam Johnson',
    age: 34,
    email: 'liam.j@example.com',
    address: {
      street: '123 Oak Street',
      city: 'Springfield',
      country: 'United States',
    },
    salary: 1000,
    bio: 'Avid traveler with a passion for photography.',
  },
  {
    id: 2,
    name: 'Emma Brown',
    age: 28,
    email: 'emma.b@example.com',
    address: {
      street: '456 Maple Avenue',
      city: 'Pleasantville',
      country: 'United States',
    },
    salary: 1500,
    bio: 'Nature enthusiast and animal lover.',
  },
  {
    id: 3,
    name: 'Noah Smith',
    age: 22,
    email: 'noah.s@example.com',
    address: {
      street: '789 Pine Road',
      city: 'Greenville',
      country: 'United States',
    },
    salary: 4000,
    bio: 'Musician and aspiring songwriter.',
  },
  {
    id: 4,
    name: 'Olivia Davis',
    age: 41,
    email: 'olivia.d@example.com',
    address: {
      street: '101 Elm Street',
      city: 'Meadowville',
      country: 'United States',
    },
    salary: 3000,
    bio: 'Passionate about cooking and hosting dinner parties.',
  },
  {
    id: 5,
    name: 'Liam Johnson',
    age: 30,
    email: 'liam.j@example.com',
    address: {
      street: '1111 Chestnut Avenue',
      city: 'Chesterville',
      country: 'Canada',
    },
    salary: 5000,
    bio: 'Tech geek and video game enthusiast.',
  },
  {
    id: 6,
    name: 'Sophia Wilson',
    age: 25,
    email: 'sophia.w@example.com',
    address: {
      street: '222 Oak Lane',
      city: 'Willowville',
      country: 'Canada',
    },
    salary: 150,
    bio: 'Bookworm and aspiring writer.',
  },
  {
    id: 7,
    name: 'Jackson Taylor',
    age: 38,
    email: 'jackson.t@example.com',
    address: {
      street: '333 Pine Street',
      city: 'Riverdale',
      country: 'Canada',
    },
    salary: 5500,
    bio: 'Outdoor enthusiast and mountain biker.',
  },
  {
    id: 8,
    name: 'Olivia Martin',
    age: 29,
    email: 'olivia.m@example.com',
    address: {
      street: '444 Maple Avenue',
      city: 'Sunnyville',
      country: 'Canada',
    },
    salary: 12000,
    bio: 'Yoga lover and meditation practitioner.',
  },
  {
    id: 9,
    name: 'Liam Johnson',
    age: 45,
    email: 'liam.j@example.com',
    address: {
      street: '555 Elm Road',
      city: 'Hilltown',
      country: 'United Kingdom',
    },
    salary: 1300,
    bio: 'History buff and amateur archaeologist.',
  },
  {
    id: 10,
    name: 'Ava Martinez',
    age: 31,
    email: 'ava.m@example.com',
    address: {
      street: '666 Oak Street',
      city: 'Mysticville',
      country: 'United Kingdom',
    },
    salary: 5000,
    bio: 'Travel addict and cultural explorer.',
  },
  {
    id: 11,
    name: 'Sophia White',
    age: 39,
    email: 'sophia.w@example.com',
    address: {
      street: '777 Pine Lane',
      city: 'Fairfield',
      country: 'United Kingdom',
    },
    salary: 22000,
    bio: 'Art enthusiast and gallery hopper.',
  },
  {
    id: 12,
    name: 'Liam Johnson',
    age: 24,
    email: 'liam.j@example.com',
    address: {
      street: '888 Maple Road',
      city: 'Harmony',
      country: 'Australia',
    },
    salary: 1300,
    bio: 'Surfer and beach lover.',
  },
  {
    id: 13,
    name: 'Oliver Lee',
    age: 37,
    email: 'oliver.l@example.com',
    address: {
      street: '999 Elm Lane',
      city: 'Bayview',
      country: 'Australia',
    },
    salary: 1000,
    bio: 'Adrenaline junkie and skydiving enthusiast.',
  },
  {
    id: 14,
    name: 'Emma Harris',
    age: 26,
    email: 'emma.h@example.com',
    address: {
      street: '1234 Oak Avenue',
      city: 'Seaville',
      country: 'Australia',
    },
    salary: 1000,
    bio: 'Animal rights advocate and pet rescuer.',
  },
  {
    id: 15,
    name: 'Liam Johnson',
    age: 50,
    email: 'liam.j@example.com',
    address: {
      street: '5678 Pine Street',
      city: 'Mountainville',
      country: 'New Zealand',
    },
    salary: 1000,
    bio: 'Hiker and nature conservationist.',
  },
  {
    id: 16,
    name: 'Mia Taylor',
    age: 33,
    email: 'mia.t@example.com',
    address: {
      street: '9876 Maple Road',
      city: 'Fernwood',
      country: 'New Zealand',
    },
    salary: 1000,
    bio: 'Plant lover and urban gardener.',
  },
  {
    id: 17,
    name: 'James Jackson',
    age: 23,
    email: 'james.j@example.com',
    address: {
      street: '5432 Elm Lane',
      city: 'Willowbrook',
      country: 'New Zealand',
    },
    salary: 1000,
    bio: 'Gamer and eSports enthusiast.',
  },
  {
    id: 18,
    name: 'Liam Johnson',
    age: 44,
    email: 'liam.j@example.com',
    address: {
      street: '8765 Pine Avenue',
      city: 'Sunsetville',
      country: 'South Africa',
    },
    salary: 1000,
    bio: 'Wine connoisseur and vineyard traveler.',
  },
  {
    id: 19,
    name: 'Isabella Brown',
    age: 29,
    email: 'isabella.b@example.com',
    address: {
      street: '6543 Oak Road',
      city: 'Oceanview',
      country: 'South Africa',
    },
    salary: 1000,
    bio: 'Foodie and culinary explorer.',
  },
  {
    id: 20,
    name: 'Liam Johnson',
    age: 36,
    email: 'liam.j@example.com',
    address: {
      street: '2345 Maple Lane',
      city: 'Jungleburg',
      country: 'South Africa',
    },
    salary: 1000,
    bio: 'Wildlife photographer and adventurer.',
  },
];

// ----------------------------------------------------------------------------------------------

// Task1
// Сделайте новый массив, который будет соедержать пользователь с зарплатой более 5000
// const task1 = users.filter((el) => el.salary > 5000);
// console.log(task1);
// ----------------------------------------------------------------------------------------------------

// Task2
// Сделайте новый массив, который будет содержать пользователь с диапазоном возраста от 26 до 33 не включительно
// const task2 = users.filter((el) => el.age > 26 && el.age < 33);
// console.log(task2);
// ----------------------------------------------------------------------------------------------------

// Task3
// Найдите элемент, описание которого (bio) содержит ровно 6 слов
// const task3 = users.find((el) => el.bio.split(' ').length == 6);
// console.log(task3);

// ----------------------------------------------------------------------------------------------------
// Task4
// Cоздайте новый массив, который будет хранить только 3 сво-ва:
// {firstname, lastname, age}
// const task4 = users.map((el) => {
//   return {
//     firstname: el.name.split(' ')[0],
//     lastname: el.name.split(' ')[1],
//     age: el.age,
//   };
// });
// console.log(task4);
// -----------------------------
// let task4 = users.map(el => {
//     let [firstname, lastname] = el.name.split(' ');
//     return {
//         firstname,
//         lastname,
//         age: el.age
//     };
// });
// console.log(task4);

// ------------------------------------------------------------------------------------------------------
