'use strict'
// Работа с переменными:

let user = 'John Doe';
console.log (user);

let student = 'Ksusha';
console.log (student);

user = student;

// // // как вы думаете, что сейчас в переменной user? Свой вариант запишите в комментарий;
// // // Ksusha

console.log (user);

// // // Работа с примитивами:

let test = 1;
 test++;
 test = test + '1';

// // // как вы думаете, что сейчас в переменной test? Свой вариант напишите в комментарий;
// // // 21

console.log (test);

test--;

// // // как вы думаете, что сейчас в переменной test? Свой вариант напишите в комментарий;
// // // 20

console.log (test);

console.log (Boolean (test));

// как вы думаете, что сейчас в переменной test? Свой вариант напишите в комментарий;
// true

// / Дан массив [2, 3, 5, 8]. С помощью цикла for найдите произведение элементов этого массива.

let sum = 0;
const arr = [2, 3, 5, 8];
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];   
}
console.log(sum);

// Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. С помощью цикла for и оператора if 
// выведите в консоль те элементы массива, которые больше 5-ти, но меньше 10-ти.

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
	if(arr2[i] > 5 && arr2[i] < 10) {
		console.log(arr2[i]);
	}
}

// // Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. С помощью цикла for и оператора if 
// // выведите в консоль четные элементы массива.

const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr3.length; i++) {
	if(!(arr3[i] % 2)) {
		console.log(arr3[i]);
	}
}