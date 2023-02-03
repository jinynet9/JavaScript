
'use strict';

// join: make a string out of an array
if ( false )
{
	const fruits = ['apple', 'banana', 'orange'];
	const result = fruits.join();
	console.log(result);
	const result2 = fruits.join(' | ');
	console.log(result2);
}

// split: make an array out of a string
if ( false )
{
	const fruits = 'apple, banana, orange, kiwi';
	const result = fruits.split(',');
	console.log(result);
	const result2 = fruits.split(',', 2);
	console.log(result2);
}

// reverse
if ( false )
{
	const array = [1, 2, 3, 4, 5];
	const result = array.reverse();
	console.log(`result: ${result}`);
	console.log(`array: ${array}`);
}

// splice: mutate orignal data
if ( false )
{
	const array = [1, 2, 3, 4, 5];
	console.log(`array: ${array}`);
	const result = array.splice(0, 2);
	console.log(`result: ${result}`);
	console.log(`array: ${array}`);
}

// slice: don't mutate orignal data
if ( false )
{
	const array = [1, 2, 3, 4, 5];
	console.log(`array: ${array}`);
	const result = array.slice(2, 5);
	console.log(`result: ${result}`);
	console.log(`array: ${array}`);
}

class Student {
	constructor(name, age, enrolled, score) {
		this.name     = name;
		this.age      = age;
		this.enrolled = enrolled;
		this.score    = score;
	}
};
const students = [
	new Student('A', 29, true,  45),
	new Student('B', 28, false, 80),
	new Student('C', 30, true,  90),
	new Student('D', 40, false, 66),
	new Student('E', 18, true,  88),
];

// find a student with the score 90
if ( true )
{
	const result = students.find(function(student, index) {
		return student.score === 90;
	});
	console.log(`result: ${result}`);
	console.log(result);
}


