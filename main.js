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


// LESSON-5
// Преобразование формата даты:
// в переменной date лежит дата в формате '2020-11-26';
// преобразуйте эту дату в формат '26.11.2020';
// функция должна быть универсальной, т.е. принимать любую дату и приводить ее к поставленному в задании формату.


const transformDate = (date) => {
	let arr = date.split('-').reverse();
		for (let i = 0; i < arr.length; i++) {
			let newDate = arr.join('.');
			console.log(newDate);
			return newDate;
	}
}
transformDate('1997-05-10');

// Поиск объектов размещения:
// дан массив;
// напишите функцию поиска, которая будет принимать строку;
// по полученной строке найдите все совпадения в массива;
// верните список строк в формате: страна, город, отель.

const data = [
	{
	  country: 'Russia',
	  city: 'Saint Petersburg',
	  hotel: 'Hotel Leopold',
	},
	{
	  country: 'Spain',
	  city: 'Santa Cruz de Tenerife',
	  hotel: 'Apartment Sunshine',
	},
	{
	  country: 'Slowakia',
	  city: 'Vysokie Tatry',
	  hotel: 'Villa Kunerad',
	},
	{
	  country: 'Germany',
	  city: 'Berlin',
	  hotel: 'Hostel Friendship',
	},
	{
	  country: 'Indonesia',
	  city: 'Bali',
	  hotel: 'Ubud Bali Resort&SPA',
	},
	{
	  country: 'Netherlands',
	  city: 'Rotterdam',
	  hotel: 'King Kong Hostel',
	},
	{
	  country: 'Marocco',
	  city: 'Ourika',
	  hotel: 'Rokoko Hotel',
	},
	{
	  country: 'Germany',
	  city: 'Berlin',
	  hotel: 'Hotel Rehberge Berlin Mitte',
	},
];

const searchFunc = (str) => {
	for (let i = 0; i < data.length; i++){
	const arr = data[i].country + data[i].city + data[i].hotel;
		if(arr.includes(str)) {
		console.log (data[i]);
		}
	}
	return arr;
}
console.log(searchFunc('Hotel Leopold'));