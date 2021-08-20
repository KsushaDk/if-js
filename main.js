// // LESSON-2

// // #1

// let user = 'John Doe';
// console.log(user);

// const student = 'Ksusha';
// console.log(student);

// user = student;

// // как вы думаете, что сейчас в переменной user? Свой вариант запишите в комментарий;
// // Ksusha

// console.log(user);

// // Работа с примитивами:

// let test = 1;
// test += 1;
// test += '1';

// // как вы думаете, что сейчас в переменной test? Свой вариант напишите в комментарий;
// // 21

// console.log(test);
// test -= 1;

// // как вы думаете, что сейчас в переменной test? Свой вариант напишите в комментарий;
// // 20

// console.log(test);

// console.log(Boolean(test));

// // как вы думаете, что сейчас в переменной test? Свой вариант напишите в комментарий;
// // true

// // #2

// let sum = 0;
// const arr = [2, 3, 5, 8];
// for (let i = 0; i < arr.length; i += 1) {
//   sum += arr[i];
// }
// console.log(sum);

// // #3

// const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
// for (let i = 0; i < arr2.length; i += 1) {
//   if (arr2[i] > 5 && arr2[i] < 10) {
//     console.log(arr2[i]);
//   }
// }

// // Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. С помощью цикла for и оператора if
// // выведите в консоль четные элементы массива.

// const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
// for (let i = 0; i < arr3.length; i += 1) {
//   if (!(arr3[i] % 2)) {
//     console.log(arr3[i]);
//   }
// }

// // LESSON-3

// // #1

// function palindrome(word) {
//   const wordBackward = word.split('').reverse().join('');
//   if (word === wordBackward) {
//     return alert(Boolean(1));
//   }
//   return alert(Boolean(0));
// }
// palindrome('палиндром');

// // #2

// function returnMin1(a, b) {
//   if (a > b) {
//     return b;
//   }
//   return a;
// }
// alert(returnMin1(2, 3));

// function returnMin2(a, b) {
//   return (a > b) ? b : a;
// }
// alert(returnMin2(4, 5));

// function returnMax1(a, b) {
//   if (a > b) {
//     return a;
//   }
//   return b;
// }
// alert(returnMax1(6, 7));

// function returnMax2(a, b) {
//   return (a > b) ? a : b;
// }
// alert(returnMax2(8, 9));

// // #3

// function replaceToZero() {
//   const randomArray = [];
//   while (randomArray.length < 10) {
//     const n = Math.floor(Math.random() * 100) + 1;
//     if (randomArray.indexOf(n) === -1) randomArray.push(n);
//   }

//   for (let i = 0; i < randomArray.length; i += 1) {
//     const newStr = randomArray.toString();
//     console.log(newStr.replaceAll('0', 'zero').split(','));
//     return newStr;
//   }
// }
// replaceToZero();

// // LESSON-4

// // #1

// function sum2(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// console.log('sum:', sum2(5)(2));

// // #2

// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// const p = document.querySelectorAll('p');
// const makePainter = () => {
//   let i = 0;
//   return (e) => {
//     e.target.style.color = colors[i];
//     i += 1;
//     if (i >= colors.length) {
//       i = 0;
//     }
//   };
// };
// p.forEach((item) => {
//   const painter = makePainter();
//   item.addEventListener('click', painter);
// });

// // LESSON-5

// // #1

// const transformDate = (date) => {
//   const arr4 = date.split('-').reverse();
//   for (let i = 0; i < arr4.length; i += 1) {
//     const newDate = arr4.join('.');
//     console.log(newDate);
//     return newDate;
//   }
// };
// transformDate('1997-05-10');

// // #2

// const data = [
//   {
//     country: 'Russia',
//     city: 'Saint Petersburg',
//     hotel: 'Hotel Leopold',
//   },
//   {
//     country: 'Spain',
//     city: 'Santa Cruz de Tenerife',
//     hotel: 'Apartment Sunshine',
//   },
//   {
//     country: 'Slowakia',
//     city: 'Vysokie Tatry',
//     hotel: 'Villa Kunerad',
//   },
//   {
//     country: 'Germany',
//     city: 'Berlin',
//     hotel: 'Hostel Friendship',
//   },
//   {
//     country: 'Indonesia',
//     city: 'Bali',
//     hotel: 'Ubud Bali Resort&SPA',
//   },
//   {
//     country: 'Netherlands',
//     city: 'Rotterdam',
//     hotel: 'King Kong Hostel',
//   },
//   {
//     country: 'Marocco',
//     city: 'Ourika',
//     hotel: 'Rokoko Hotel',
//   },
//   {
//     country: 'Germany',
//     city: 'Berlin',
//     hotel: 'Hotel Rehberge Berlin Mitte',
//   },
// ];

// const searchFunc = (str) => {
//   for (let i = 0; i < data.length; i += 1) {
//     const arr5 = data[i].country + data[i].city + data[i].hotel;
//     if (arr5.includes(str)) {
//       console.log(data[i]);
//     }
//   }
//   return arr5;
// };
// console.log(searchFunc('Hotel Leopold'));

// // LESSON-6

// // #1

// function palindrome2(word) {
//   const wordBackward = word.split('').reverse().join('');
//   if (word === wordBackward) {
//     return alert(Boolean(1));
//   }
//   return alert(Boolean(0));
// }
// palindrome2('палиндром');

// // #2

// const hotels = [
//   {
//     name: 'Hotel Leopold',
//     city: 'Saint Petersburg',
//     country: 'Russia',
//   },
//   {
//     name: 'Apartment Sunshine',
//     city: 'Santa Cruz de Tenerife',
//     country: 'Spain',
//   },
//   {
//     name: 'Villa Kunerad',
//     city: 'Vysokie Tatry',
//     country: 'Slowakia',
//   },
//   {
//     name: 'Hostel Friendship',
//     city: 'Berlin',
//     country: 'Germany',
//   },
//   {
//     name: 'Radisson Blu Hotel',
//     city: 'Kyiv',
//     country: 'Ukraine',
//   },
//   {
//     name: 'Paradise Hotel',
//     city: 'Guadalupe',
//     country: 'Mexico',
//   },
//   {
//     name: 'Hotel Grindewald',
//     city: 'Interlaken',
//     country: 'Switzerland',
//   },
//   {
//     name: 'The Andaman Resort',
//     city: 'Port Dickson',
//     country: 'Malaysia',
//   },
//   {
//     name: 'Virgin Hotel',
//     city: 'Chicago',
//     country: 'USA',
//   },
//   {
//     name: 'Grand Beach Resort',
//     city: 'Dubai',
//     country: 'United Arab Emirates',
//   },
//   {
//     name: 'Shilla Stay',
//     city: 'Seoul',
//     country: 'South Korea',
//   },
//   {
//     name: 'San Firenze Suites',
//     city: 'Florence',
//     country: 'Italy',
//   },
//   {
//     name: 'The Andaman Resort',
//     city: 'Port Dickson',
//     country: 'Malaysia',
//   },
//   {
//     name: 'Black Penny Villas',
//     city: 'BTDC, Nuca Dua',
//     country: 'Indonesia',
//   },
//   {
//     name: 'Koko Hotel',
//     city: 'Tokyo',
//     country: 'Japan',
//   },
//   {
//     name: 'Ramada Plaza',
//     city: 'Istanbul',
//     country: 'Turkey',
//   },
//   {
//     name: 'Waikiki Resort Hotel',
//     city: 'Hawaii',
//     country: 'USA',
//   },
//   {
//     name: 'Puro Hotel',
//     city: 'Krakow',
//     country: 'Poland',
//   },
//   {
//     name: 'Asma Suites',
//     city: 'Santorini',
//     country: 'Greece',
//   },
//   {
//     name: 'Cityden Apartments',
//     city: 'Amsterdam',
//     country: 'Netherlands',
//   },
//   {
//     name: 'Mandarin Oriental',
//     city: 'Miami',
//     country: 'USA',
//   },
//   {
//     name: 'Concept Terrace Hotel',
//     city: 'Rome',
//     country: 'Italy',
//   },
//   {
//     name: 'Ponta Mar Hotel',
//     city: 'Fortaleza',
//     country: 'Brazil',
//   },
//   {
//     name: 'Four Seasons Hotel',
//     city: 'Sydney',
//     country: 'Australia',
//   },
//   {
//     name: 'Le Meridien',
//     city: 'Nice',
//     country: 'France',
//   },
//   {
//     name: 'Apart Neptun',
//     city: 'Gdansk',
//     country: 'Poland',
//   },
//   {
//     name: 'Lux Isla',
//     city: 'Ibiza',
//     country: 'Spain',
//   },
//   {
//     name: 'Nox Hostel',
//     city: 'London',
//     country: 'UK',
//   },
//   {
//     name: 'Leonardo Vienna',
//     city: 'Vienna',
//     country: 'Austria',
//   },
//   {
//     name: 'Adagio Aparthotel',
//     city: 'Edinburgh',
//     country: 'UK',
//   },
//   {
//     name: 'Steigenberger Hotel',
//     city: 'Hamburg',
//     country: 'Germany',
//   },
// ];

// const search = (str) => {
//   //   debugger
//   const arr6 = [];
//   hotels.forEach((item) => {
//     const newStr = `${item.country}, ${item.city}, ${item.name}`;
//     if (newStr.includes(str)) {
//       arr6.push(newStr);
//     }
//   });
//   return arr6;
// };
// console.log(search('USA'));

// // #3
// const hotels2 = [
//   {
//     name: 'Hotel Leopold',
//     city: 'Saint Petersburg',
//     country: 'Russia',
//   },
//   {
//     name: 'Apartment Sunshine',
//     city: 'Santa Cruz de Tenerife',
//     country: 'Spain',
//   },
//   {
//     name: 'Villa Kunerad',
//     city: 'Vysokie Tatry',
//     country: 'Slowakia',
//   },
//   {
//     name: 'Hostel Friendship',
//     city: 'Berlin',
//     country: 'Germany',
//   },
//   {
//     name: 'Radisson Blu Hotel',
//     city: 'Kyiv',
//     country: 'Ukraine',
//   },
//   {
//     name: 'Paradise Hotel',
//     city: 'Guadalupe',
//     country: 'Mexico',
//   },
//   {
//     name: 'Hotel Grindewald',
//     city: 'Interlaken',
//     country: 'Switzerland',
//   },
//   {
//     name: 'The Andaman Resort',
//     city: 'Port Dickson',
//     country: 'Malaysia',
//   },
//   {
//     name: 'Virgin Hotel',
//     city: 'Chicago',
//     country: 'USA',
//   },
//   {
//     name: 'Grand Beach Resort',
//     city: 'Dubai',
//     country: 'United Arab Emirates',
//   },
//   {
//     name: 'Shilla Stay',
//     city: 'Seoul',
//     country: 'South Korea',
//   },
//   {
//     name: 'San Firenze Suites',
//     city: 'Florence',
//     country: 'Italy',
//   },
//   {
//     name: 'The Andaman Resort',
//     city: 'Port Dickson',
//     country: 'Malaysia',
//   },
//   {
//     name: 'Black Penny Villas',
//     city: 'BTDC, Nuca Dua',
//     country: 'Indonesia',
//   },
//   {
//     name: 'Koko Hotel',
//     city: 'Tokyo',
//     country: 'Japan',
//   },
//   {
//     name: 'Ramada Plaza',
//     city: 'Istanbul',
//     country: 'Turkey',
//   },
//   {
//     name: 'Waikiki Resort Hotel',
//     city: 'Hawaii',
//     country: 'USA',
//   },
//   {
//     name: 'Puro Hotel',
//     city: 'Krakow',
//     country: 'Poland',
//   },
//   {
//     name: 'Asma Suites',
//     city: 'Santorini',
//     country: 'Greece',
//   },
//   {
//     name: 'Cityden Apartments',
//     city: 'Amsterdam',
//     country: 'Netherlands',
//   },
//   {
//     name: 'Mandarin Oriental',
//     city: 'Miami',
//     country: 'USA',
//   },
//   {
//     name: 'Concept Terrace Hotel',
//     city: 'Rome',
//     country: 'Italy',
//   },
//   {
//     name: 'Ponta Mar Hotel',
//     city: 'Fortaleza',
//     country: 'Brazil',
//   },
//   {
//     name: 'Four Seasons Hotel',
//     city: 'Sydney',
//     country: 'Australia',
//   },
//   {
//     name: 'Le Meridien',
//     city: 'Nice',
//     country: 'France',
//   },
//   {
//     name: 'Apart Neptun',
//     city: 'Gdansk',
//     country: 'Poland',
//   },
//   {
//     name: 'Lux Isla',
//     city: 'Ibiza',
//     country: 'Spain',
//   },
//   {
//     name: 'Nox Hostel',
//     city: 'London',
//     country: 'UK',
//   },
//   {
//     name: 'Leonardo Vienna',
//     city: 'Vienna',
//     country: 'Austria',
//   },
//   {
//     name: 'Adagio Aparthotel',
//     city: 'Edinburgh',
//     country: 'UK',
//   },
//   {
//     name: 'Steigenberger Hotel',
//     city: 'Hamburg',
//     country: 'Germany',
//   },
// ];

// const contries = hotels2.reduce((acc, item) => {
//   const result = { ...acc };
//   if (!result[item.country]) {
//     result[item.country] = [];
//   }
//   if (!result[item.country].includes([item.city])) {
//     result[item.country].push(item.city);
//   }
//   return result;
// }, {});

// console.log(contries);

// //   LESSON-7

// const obj1 = {
//   a: 'a',
//   b: {
//     a: 'a',
//     b: 'b',
//     c: {
//       a: 1,
//     },
//   },
// };
// const obj2 = {
//   b: {
//     c: {
//       a: 1,
//     },
//     b: 'b',
//     a: 'a',
//   },
//   a: 'a',
// };
// const obj3 = {
//   a: {
//     c: {
//       a: 'a',
//     },
//     b: 'b',
//     a: 'a',
//   },
//   b: 'b',
// };

// const deepEqual = (object1, object2) => {
//   const isArgObjects = typeof object1 === 'object' && typeof object2 === 'object';
//   const isArgNotNull = object1 !== null && object2 !== null;

//   if (isArgObjects && isArgNotNull) {
//     for (const key in object1) {
//       if (!object2.hasOwnProperty(key)) {
//         return false;
//       }

//       if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
//         const result = deepEqual(object1[key], object2[key]);
//         if (!result) {
//           return false;
//         }
//       } else if (object1[key] !== object2[key]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };

// console.log(deepEqual(obj1, obj2)); // true
// console.log(deepEqual(obj1, obj3)); // false

// // LESSON-8

// const studentsData = [
//   {
//     firstName: 'Василий',
//     lastName: 'Петров',
//     admissionYear: 2019,
//     courseName: 'Java',
//   },
//   {
//     firstName: 'Иван',
//     lastName: 'Иванов',
//     admissionYear: 2018,
//     courseName: 'JavaScript',
//   },
//   {
//     firstName: 'Александр',
//     lastName: 'Федоров',
//     admissionYear: 2017,
//     courseName: 'Python',
//   },
//   {
//     firstName: 'Николай',
//     lastName: 'Петров',
//     admissionYear: 2019,
//     courseName: 'Android',
//   },
// ];

// class User {
//   constructor(props) {
//     this.firstName = props.firstName;
//     this.lastName = props.lastName;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// class Student extends User {
//   constructor(props) {
//     super(props);
//     this.admissionYear = props.admissionYear;
//     this.courseName = props.courseName;
//   }

//   get course() {
//     return new Date().getFullYear() - this.admissionYear;
//   }
// }

// class Students {
//   constructor(students) {
//     this.students = students;
//   }

//   getInfo() {
//     return this.students.sort((student1, student2) => new Student(student1).course - new Student(student2).course).map((studentt) => `${new User(studentt).fullName} - ${new Student(studentt).courseName} -  ${new Student(studentt).course}`);
//   }
// }

// const students = new Students(studentsData);
// console.log(students.getInfo());

// // LESSON-10

const dataTripHouse = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

const wrapperGuests = document.createElement('div');
wrapperGuests.className = 'guests';
document.body.append(wrapperGuests);

const headerGuests = document.createElement('h2');
headerGuests.innerHTML = 'Homes guests loves';
headerGuests.className = 'guests__header';
wrapperGuests.prepend(headerGuests);

const itemsGuests = document.createElement('div');
itemsGuests.className = 'guests__items';
headerGuests.after(itemsGuests);

const pasteGuestsItem = function (arr) {
  for (let i = 0; i < 4; i += 1) {
    const itemGuests = document.createElement('div');
    itemGuests.className = 'guests__item';
    itemsGuests.append(itemGuests);

    const imgGuests = document.createElement('img');
    imgGuests.setAttribute('src', `${arr[i].imageUrl}`);
    imgGuests.className = 'guests__item_img';
    itemGuests.prepend(imgGuests);

    const textBlueGuests = document.createElement('a');
    textBlueGuests.className = 'guests__item_a';
    textBlueGuests.innerHTML = `${arr[i].name}`;
    imgGuests.after(textBlueGuests);

    const textGreyGuests = document.createElement('p');
    textGreyGuests.className = 'guests__item_p';
    textGreyGuests.innerHTML = `${arr[i].city}, ${arr[i].country}`;
    textBlueGuests.after(textGreyGuests);
  }
};

pasteGuestsItem(dataTripHouse);
