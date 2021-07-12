'use strict'
// // Работа с переменными:

// let user = 'John Doe';
// console.log (user);

// let student = 'Ksusha';
// console.log (student);

// user = student;

// // как вы думаете, что сейчас в переменной user? Свой вариант запишите в комментарий;
// // Ksusha

// console.log (user);

// // Работа с примитивами:

// let test = 1;
//  test++;
//  test = test + '1';

// // как вы думаете, что сейчас в переменной test? Свой вариант напишите в комментарий;
// // 21

// console.log (test);

// test--;

// // как вы думаете, что сейчас в переменной test? Свой вариант напишите в комментарий;
// // 20

// console.log (test);

// console.log (Boolean (test));

// // как вы думаете, что сейчас в переменной test? Свой вариант напишите в комментарий;
// // true

// // Дан массив [2, 3, 5, 8]. С помощью цикла for найдите произведение элементов этого массива.

// let sum = 0;
// const arr = [2, 3, 5, 8];
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];   
// }
// console.log(sum);

// // Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. С помощью цикла for и оператора if 
// // выведите в консоль те элементы массива, которые больше 5-ти, но меньше 10-ти.

// const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
// for (let i = 0; i < arr2.length; i++) {
// 	if(arr2[i] > 5 && arr2[i] < 10) {
// 		console.log(arr2[i]);
// 	}
// }

// // Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. С помощью цикла for и оператора if 
// // выведите в консоль четные элементы массива.

// const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
// for (let i = 0; i < arr3.length; i++) {
// 	if(!(arr3[i] % 2)) {
// 		console.log(arr3[i]);
// 	}
// }







// // LESSON-3

// // Функция palindrome (Слово палиндром может читаться справа-налево и слева-направо одинаково. Прим "шалаш".):
// // создайте функцию palindrome, которая будет возвращать bool значение в зависимости от того, является ли переданное 
// // функции слово палиндромом или нет.

//    function palindrome (word) {
//     let wordBackward = word.split ('').reverse().join('');
//     if ( word===wordBackward) {
//         return alert ( Boolean(1) );
//     } else {
//         return alert ( Boolean(0) );
//     }
//    }
//    palindrome ('палиндром');


// // Функция min(a, b) и функция max(a,b):
// // напишите функцию min(a,b), которая возвращает меньшее из чисел;
// // напишите функцию max(a,y), которая возвращает большее из чисел;
// // попробуйте переписать функцию, используя тернарный оператор.

// function returnMin1 (a, b) {
//     if (a > b) {
//         return b;
//     }
//     return a;
// }
// alert ( returnMin1 (2, 3) );

// function returnMin2 (a, b) {
//     return (a > b)? b : a;
// }
// alert ( returnMin2 (4, 5) );

// function returnMax1 (a, b) {
//     if (a > b) {
//         return a;
//     }
//     return b;
// }
// alert ( returnMax1 (6, 7) );

// function returnMax2 (a, b) {
//     return (a > b)? a : b;
// }
// alert ( returnMax2 (8, 9) );

// // Замена элементов массива:
// // создайте массив с десятью случайными элементами от 0 до 100;
// // напишите функцию, которая будет заменять все 0 на строку 'zero';
// // выведите полученный массив в консоль (пример: [12, 53, '2zero', 18, 22, '1zerozero', 43, 57, '5zero', 1]).

// function replaceToZero () {
// const randomArray = [];
// while (randomArray.length < 10) {
//     let n = Math.floor(Math.random() * 100) + 1;
//     if(randomArray.indexOf(n) === -1) randomArray.push(n);
// }

// for (let i = 0; i < randomArray.length; i++) {
// 	let newStr = randomArray.toString();
// 	console.log(newStr.replaceAll('0', 'zero') .split(','));
// 	return newStr;
//   }
// }
// replaceToZero();



// // LESSON-4

// // Напишите функцию sum, которая возвращает сумму чисел следующим образом:
// // console.log(sum(5)(2)); // 7

// 	function sum(a) {
// 		return function (b) {
// 			return a + b;
// 		}
// 	}
// 	console.log ("sum:", sum (5)(2));


// // Покрасьте абзацы по клику (событие click):
// // даны 3 абзаца:
// // <p id="text1">Text 1</p>
// // <p id="text2">Text 2</p>
// // <p id="text3">Text 3</p>
// // дан массив цветов:
// // const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// // по первому нажатию на абзац он должен покраситься в первый цвет из массива, по второму нажатию - 
// // во второй и так далее;
// // цвета из массива меняются бесконечно;
// // все абзацы работают независимо.

// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// const p = document.querySelectorAll('p');
// const makePainter = () => {
// 	let i = 0;
// 	return (e) => {
// 		e.target.style.color = colors[i];
// 		i++;
// 		if (i >= colors.length) {
// 		  i = 0;
// 		}
// 	}
// }
// p.forEach((item) => {
// 	const painter = makePainter();
// 	item.addEventListener('click', painter);
// });


// // LESSON-5
// // Преобразование формата даты:
// // в переменной date лежит дата в формате '2020-11-26';
// // преобразуйте эту дату в формат '26.11.2020';
// // функция должна быть универсальной, т.е. принимать любую дату и приводить ее к поставленному в задании формату.


// const transformDate = (date) => {
// 	let arr = date.split('-').reverse();
// 		for (let i = 0; i < arr.length; i++) {
// 			let newDate = arr.join('.');
// 			console.log(newDate);
// 			return newDate;
// 	}
// }
// transformDate('1997-05-10');

// // Поиск объектов размещения:
// // дан массив;
// // напишите функцию поиска, которая будет принимать строку;
// // по полученной строке найдите все совпадения в массива;
// // верните список строк в формате: страна, город, отель.

// const data = [
// 	{
// 	  country: 'Russia',
// 	  city: 'Saint Petersburg',
// 	  hotel: 'Hotel Leopold',
// 	},
// 	{
// 	  country: 'Spain',
// 	  city: 'Santa Cruz de Tenerife',
// 	  hotel: 'Apartment Sunshine',
// 	},
// 	{
// 	  country: 'Slowakia',
// 	  city: 'Vysokie Tatry',
// 	  hotel: 'Villa Kunerad',
// 	},
// 	{
// 	  country: 'Germany',
// 	  city: 'Berlin',
// 	  hotel: 'Hostel Friendship',
// 	},
// 	{
// 	  country: 'Indonesia',
// 	  city: 'Bali',
// 	  hotel: 'Ubud Bali Resort&SPA',
// 	},
// 	{
// 	  country: 'Netherlands',
// 	  city: 'Rotterdam',
// 	  hotel: 'King Kong Hostel',
// 	},
// 	{
// 	  country: 'Marocco',
// 	  city: 'Ourika',
// 	  hotel: 'Rokoko Hotel',
// 	},
// 	{
// 	  country: 'Germany',
// 	  city: 'Berlin',
// 	  hotel: 'Hotel Rehberge Berlin Mitte',
// 	},
// ];

// const searchFunc = (str) => {
// 	for (let i = 0; i < data.length; i++){
// 	const arr = data[i].country + data[i].city + data[i].hotel;
// 		if(arr.includes(str)) {
// 		console.log (data[i]);
// 		}
// 	}
// 	return arr;
// }
// console.log(searchFunc('Hotel Leopold'));


// // LESSON-6
// // Функция palindrome (Слово палиндром может читаться справа-налево и слева-направо одинаково. Прим "шалаш".):
// // создайте функцию palindrome, которая будет возвращать bool значение в зависимости от того, является ли переданное функции слово 
// // палиндромом или нет;
// // теперь уже зная как работать со строками и массивами запишите реализацию этого метода в одну строку.

// function palindrome (word) {
// let wordBackward = word.split ('').reverse().join('');
// if (word===wordBackward) {
// 	return alert ( Boolean(1) );
// 	} else {
// 	return alert ( Boolean(0) );
// 	}
// }
// palindrome ('палиндром');
	


// // Поиск объектов размещения:
// // дан массив;
// // напишите функцию поиска, которая будет принимать строку;
// // по полученной строке найдите все совпадения в массиве по любому из полей;
// // верните масиив строк в формате: страна, город, отель;
// // зная как работать с массивами, сократите вашу функцию избавившись от цикла for.

// const hotels = [
// 	{
// 	  name: 'Hotel Leopold',
// 	  city: 'Saint Petersburg',
// 	  country: 'Russia',
// 	},
// 	{
// 	  name: 'Apartment Sunshine',
// 	  city: 'Santa Cruz de Tenerife',
// 	  country: 'Spain',
// 	},
// 	{
// 	  name: 'Villa Kunerad',
// 	  city: 'Vysokie Tatry',
// 	  country: 'Slowakia',
// 	},
// 	{
// 	  name: 'Hostel Friendship',
// 	  city: 'Berlin',
// 	  country: 'Germany',
// 	},
// 	{
// 	  name: 'Radisson Blu Hotel',
// 	  city: 'Kyiv',
// 	  country: 'Ukraine',
// 	},
// 	{
// 	  name: 'Paradise Hotel',
// 	  city: 'Guadalupe',
// 	  country: 'Mexico',
// 	},
// 	{
// 	  name: 'Hotel Grindewald',
// 	  city: 'Interlaken',
// 	  country: 'Switzerland',
// 	},
// 	{
// 	  name: 'The Andaman Resort',
// 	  city: 'Port Dickson',
// 	  country: 'Malaysia',
// 	},
// 	{
// 	  name: 'Virgin Hotel',
// 	  city: 'Chicago',
// 	  country: 'USA',
// 	},
// 	{
// 	  name: 'Grand Beach Resort',
// 	  city: 'Dubai',
// 	  country: 'United Arab Emirates',
// 	},
// 	{
// 	  name: 'Shilla Stay',
// 	  city: 'Seoul',
// 	  country: 'South Korea',
// 	},
// 	{
// 	  name: 'San Firenze Suites',
// 	  city: 'Florence',
// 	  country: 'Italy',
// 	},
// 	{
// 	  name: 'The Andaman Resort',
// 	  city: 'Port Dickson',
// 	  country: 'Malaysia',
// 	},
// 	{
// 	  name: 'Black Penny Villas',
// 	  city: 'BTDC, Nuca Dua',
// 	  country: 'Indonesia',
// 	},
// 	{
// 	  name: 'Koko Hotel',
// 	  city: 'Tokyo',
// 	  country: 'Japan',
// 	},
// 	{
// 	  name: 'Ramada Plaza',
// 	  city: 'Istanbul',
// 	  country: 'Turkey',
// 	},
// 	{
// 	  name: 'Waikiki Resort Hotel',
// 	  city: 'Hawaii',
// 	  country: 'USA',
// 	},
// 	{
// 	  name: 'Puro Hotel',
// 	  city: 'Krakow',
// 	  country: 'Poland',
// 	},
// 	{
// 	  name: 'Asma Suites',
// 	  city: 'Santorini',
// 	  country: 'Greece',
// 	},
// 	{
// 	  name: 'Cityden Apartments',
// 	  city: 'Amsterdam',
// 	  country: 'Netherlands',
// 	},
// 	{
// 	  name: 'Mandarin Oriental',
// 	  city: 'Miami',
// 	  country: 'USA',
// 	},
// 	{
// 	  name: 'Concept Terrace Hotel',
// 	  city: 'Rome',
// 	  country: 'Italy',
// 	},
// 	{
// 	  name: 'Ponta Mar Hotel',
// 	  city: 'Fortaleza',
// 	  country: 'Brazil',
// 	},
// 	{
// 	  name: 'Four Seasons Hotel',
// 	  city: 'Sydney',
// 	  country: 'Australia',
// 	},
// 	{
// 	  name: 'Le Meridien',
// 	  city: 'Nice',
// 	  country: 'France',
// 	},
// 	{
// 	  name: 'Apart Neptun',
// 	  city: 'Gdansk',
// 	  country: 'Poland',
// 	},
// 	{
// 	  name: 'Lux Isla',
// 	  city: 'Ibiza',
// 	  country: 'Spain',
// 	},
// 	{
// 	  name: 'Nox Hostel',
// 	  city: 'London',
// 	  country: 'UK',
// 	},
// 	{
// 	  name: 'Leonardo Vienna',
// 	  city: 'Vienna',
// 	  country: 'Austria',
// 	},
// 	{
// 	  name: 'Adagio Aparthotel',
// 	  city: 'Edinburgh',
// 	  country: 'UK',
// 	},
// 	{
// 	  name: 'Steigenberger Hotel',
// 	  city: 'Hamburg',
// 	  country: 'Germany',
// 	},
//   ];

//   const search = (str) => {
// 	//   debugger
// 	const arr = [];
// 	hotels.forEach(function(item) {
// 	const newStr = `${item.country}, ${item.city}, ${item.name}`;
// 		if(newStr.includes(str)) {
// 		arr.push(newStr);
// 		}	
// });
// 	return arr;
// }
// console.log(search('USA'));


// // Сопоставте страны с городами из массива:
// // дан массив;
// // напишите функцию, которая выберет все уникальные страны и сопоставит с ними города;
// // в консоли должен быть выведен примерно такой результат:
// // {
// //    Australia: ['Sydney'],
// //    Germany: ['Berlin', 'Hamburg'],
// //    Italy: ['Florence', 'Rome'],
// //    USA: ['Chicago', 'Hawaii', 'Miami'],
// //    Ukraine: ['Kyiv']
// // }

// const hotels = [
// 	{
// 	  name: 'Hotel Leopold',
// 	  city: 'Saint Petersburg',
// 	  country: 'Russia',
// 	},
// 	{
// 	  name: 'Apartment Sunshine',
// 	  city: 'Santa Cruz de Tenerife',
// 	  country: 'Spain',
// 	},
// 	{
// 	  name: 'Villa Kunerad',
// 	  city: 'Vysokie Tatry',
// 	  country: 'Slowakia',
// 	},
// 	{
// 	  name: 'Hostel Friendship',
// 	  city: 'Berlin',
// 	  country: 'Germany',
// 	},
// 	{
// 	  name: 'Radisson Blu Hotel',
// 	  city: 'Kyiv',
// 	  country: 'Ukraine',
// 	},
// 	{
// 	  name: 'Paradise Hotel',
// 	  city: 'Guadalupe',
// 	  country: 'Mexico',
// 	},
// 	{
// 	  name: 'Hotel Grindewald',
// 	  city: 'Interlaken',
// 	  country: 'Switzerland',
// 	},
// 	{
// 	  name: 'The Andaman Resort',
// 	  city: 'Port Dickson',
// 	  country: 'Malaysia',
// 	},
// 	{
// 	  name: 'Virgin Hotel',
// 	  city: 'Chicago',
// 	  country: 'USA',
// 	},
// 	{
// 	  name: 'Grand Beach Resort',
// 	  city: 'Dubai',
// 	  country: 'United Arab Emirates',
// 	},
// 	{
// 	  name: 'Shilla Stay',
// 	  city: 'Seoul',
// 	  country: 'South Korea',
// 	},
// 	{
// 	  name: 'San Firenze Suites',
// 	  city: 'Florence',
// 	  country: 'Italy',
// 	},
// 	{
// 	  name: 'The Andaman Resort',
// 	  city: 'Port Dickson',
// 	  country: 'Malaysia',
// 	},
// 	{
// 	  name: 'Black Penny Villas',
// 	  city: 'BTDC, Nuca Dua',
// 	  country: 'Indonesia',
// 	},
// 	{
// 	  name: 'Koko Hotel',
// 	  city: 'Tokyo',
// 	  country: 'Japan',
// 	},
// 	{
// 	  name: 'Ramada Plaza',
// 	  city: 'Istanbul',
// 	  country: 'Turkey',
// 	},
// 	{
// 	  name: 'Waikiki Resort Hotel',
// 	  city: 'Hawaii',
// 	  country: 'USA',
// 	},
// 	{
// 	  name: 'Puro Hotel',
// 	  city: 'Krakow',
// 	  country: 'Poland',
// 	},
// 	{
// 	  name: 'Asma Suites',
// 	  city: 'Santorini',
// 	  country: 'Greece',
// 	},
// 	{
// 	  name: 'Cityden Apartments',
// 	  city: 'Amsterdam',
// 	  country: 'Netherlands',
// 	},
// 	{
// 	  name: 'Mandarin Oriental',
// 	  city: 'Miami',
// 	  country: 'USA',
// 	},
// 	{
// 	  name: 'Concept Terrace Hotel',
// 	  city: 'Rome',
// 	  country: 'Italy',
// 	},
// 	{
// 	  name: 'Ponta Mar Hotel',
// 	  city: 'Fortaleza',
// 	  country: 'Brazil',
// 	},
// 	{
// 	  name: 'Four Seasons Hotel',
// 	  city: 'Sydney',
// 	  country: 'Australia',
// 	},
// 	{
// 	  name: 'Le Meridien',
// 	  city: 'Nice',
// 	  country: 'France',
// 	},
// 	{
// 	  name: 'Apart Neptun',
// 	  city: 'Gdansk',
// 	  country: 'Poland',
// 	},
// 	{
// 	  name: 'Lux Isla',
// 	  city: 'Ibiza',
// 	  country: 'Spain',
// 	},
// 	{
// 	  name: 'Nox Hostel',
// 	  city: 'London',
// 	  country: 'UK',
// 	},
// 	{
// 	  name: 'Leonardo Vienna',
// 	  city: 'Vienna',
// 	  country: 'Austria',
// 	},
// 	{
// 	  name: 'Adagio Aparthotel',
// 	  city: 'Edinburgh',
// 	  country: 'UK',
// 	},
// 	{
// 	  name: 'Steigenberger Hotel',
// 	  city: 'Hamburg',
// 	  country: 'Germany',
// 	},
//   ];

//   const contries = hotels.reduce((acc, item) => {
// 		const result = {...acc};
// 		if(!result[item.country]) {
// 			result[item.country] = [];
// 		}
// 		if(!result[item.country].includes([item.city])) {
// 			result[item.country].push(item.city);
// 		}
// 			return result;
//   	}, {})
//   	
// console.log(contries);



//   LESSON-7

//   Напишите функция deepEqual, которая сможет сравнивать 2 объекта с разными уровнями вложенности. Напимер:

const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (object1, object2) => { 
	const isArgObjects = typeof object1 === 'object' &&  typeof object2 === 'object';
	const isArgNotNull = typeof object1 !== null &&  typeof object2 !== null;

	if(isArgObjects && isArgNotNull) {
			for(let key in object1) {
				if(!object2.hasOwnProperty(key)) {
					return false;
				}
					
				if(typeof object1[key] === 'object' && typeof object2[key] === 'object') {
					const  result = deepEqual(object1[key], object2[key]);
					if(!result) {
						return false;
					}	
				} else {
					if(object1[key] !== object2[key]) {
						return false;
					}
				}	
			}
			return true;
		}
	};

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false


// LESSON-8
// 
// создайте класс User, который включает в себя:
// firstName (constructor);
// lastName (constructor);
// fullName (getter);
// создайте класс Student, унаследованный от User и добавте след. поля:
// admissionYear (constructor);
// courseName (constructor);
// course (getter, current year - admission year);
// создайте класс Students, который включает в себя:
// students (constructor, на основе массива);
// getInfo (prototype, function);
// getInfo - это функция, при вызове которой должен вывестись отсортированный по course (ASC) массив строк ${fullName} - ${courseName}, ${course} курс.

// const students = new Students(studentsData);
// console.log(students.getInfo());

// // Выведет:
// [
//     'Василий Петров - Java, 1 курс',
//     'Николай Петров - Android, 1 курс',
//     'Иван Иванов - JavaScript, 2 курс',
//     'Александр Федоров - Python, 3 курс',
// ]


const studentsData = [
	{
	  firstName: 'Василий',
	  lastName: 'Петров',
	  admissionYear: 2019,
	  courseName: 'Java',
	},
	{
	  firstName: 'Иван',
	  lastName: 'Иванов',
	  admissionYear: 2018,
	  courseName: 'JavaScript',
	},
	{
	  firstName: 'Александр',
	  lastName: 'Федоров',
	  admissionYear: 2017,
	  courseName: 'Python',
	},
	{
	  firstName: 'Николай',
	  lastName: 'Петров',
	  admissionYear: 2019,
	  courseName: 'Android',
	}
  ];

class User {
	constructor(props) {
		this.firstName = props.firstName;
		this.lastName = props.lastName;
	}
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	} 
}

class Student extends User {
	constructor(props) {
		super(props);
		this.admissionYear = props.admissionYear;
		this.courseName = props.courseName;
	}
	get course() {
		return new Date().getFullYear() - this.admissionYear;
	}

}

class Students {
	constructor(students) {
		this.students = students;
	}
	getInfo() {
		return this.students.sort((student1, student2) => 
		new Student (student1).course - new Student (student2).course
		).map(student => `${new User(student).fullName} - ${new Student(student).courseName} -  ${new Student(student).course}`);
	}
}

const students = new Students(studentsData);
console.log(students.getInfo());


// // LESSON-9
// Покрасьть абзацы по клику:
// даны 3 абзаца:
// <p id="text1">Text 1</p>
// <p id="text2">Text 2</p>
// <p id="text3">Text 3</p>
// даны цвета:
// const colors = {
//    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
//    [Symbol.iterator]() {
//    }
// }
// по первому нажатию на абзац он должен покраситься в первый цвет из массива, по второму нажатию - во второй и так далее;
// все абзацы работают независимо;
// необходимо использовать итераторы (Symbol.iterator) и идентификаторы (Symbol()) для идентификации счетчика;
// Подсказка! Перебор colors должен должен быть бесконечным. Для вызова используйте next(). Т.е. ваш listener должен иметь примерно такой вид:
// const changeStyle = id => event => {
//   event.target.style.color = colors.next(id).value;
// };




// LESSON-10
// Используя верстку из первого модуля, сделайте отображение контентв блока "Homes guests loves" из массива.


// LESSON-11
// Используя верстку из первого модуля, добавьте отображение фильтров (количество взрослых, количество детей и их возраст, количество номеров) из дизайна, которые находятся в форме верхней секции приложения:
// сделайте верстку фильтров;
// при клике на блок формы с полями фильтров, должен открыться фильтр;
// при нажатии на + в значении Adults, Children, Rooms значение должно увеличиться в фильтре и в поле формы;
// при нажатии на -, значения полей должеы уменьшиться также, как и при увеличении;
// для поля Adults заначения должны быть ограничены значениями от '0' до '30';
// для поля Children заначения должны быть ограничены значениями от '0' до '10';
// для поля Rooms заначения должны быть ограничены значениями от '0' до '30';
// при первом увеличении значени в поле Children, кроме увеличения значений в фильтре и форме, должен появиться подзаголовок What is the age of the child you’re travelling with?, также select с выбором возраста ребенка;
// при последующих увеличениях значенй в поле Children, кроме увеличения значений в фильтре и форме, должен добавлятья только select с выбором возраста ребенка;
// при удалении значения в поле Children должен удалиться последний добавленный select с выбором возраста ребенка;
// при последнем удалении значения в поле Children должен удалиться подзаголовок What is the age of the child you’re travelling with? и select с выбором возраста ребенка;
// возраст детей должен быть от 0 до 17 лет.
// *Сделайте верстку календаря согласно дизайну.
// *Привяжите календарь к полям даты:
// при клике на блок с полями формы для дат должен открыться календарь;
// при выборе первой даты выбранная дата должна попасть как значение в первое поле ввода даты в формате DD.MM.YYYY;
// при выборе второй даты выбранная дата должна попасть как значение во второе поле ввода даты в формате DD.MM.YYYY и календарь должен закрыться. Это должно выполняться при условии, что выбранная дата больше первой;
// если при выборе второй даты оказалось, что выбранная дате меньше первой, тогда необходимо выбранное значение использовать как первую дату;
// если даты в поля ввода уже добавлены и календарь закрыт, то при открытии календаря должен быть показан выбранный диапазон дат;
// дату, которая меньше сегодняшего дня, выбрать нельзя;
// если диапазон дат выбран, то при клике на любую дату значения календаря должны сброситься, и выбранная дата должна установиться как первая дата.