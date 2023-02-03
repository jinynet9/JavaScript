
'use strict';

/*
 * Objects
 * one of the JavaScript's data types.
 * a collection of related data and/or functionality.
 * Nearly all objects in JavaScript are instances of Ojbect
 *
 * object = array of { key : value }
 */

class Person {
    // constructor
    constructor(name, age) {
	// fields
	this.name = name;
	this.age  = age;
    }

    // methods
	speak() {
		console.log(`${this.name}: hello!`);
	}
}

/*
 * Literals and properties
 */
console.log('/* Literals and properties */');
const steve = { name: 'steve', age: 32 };	// 'object literal' syntax
console.log(`objectect name: ${steve.name}, age: ${steve.age}`);

const ellie = new Person('ellie', 20);		// 'object constructor' syntax
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// with JavaScript magic (dynamic typed language)
// can add/delete properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob
console.log(ellie.hasJob);

/*
 * Computed properties
 * key should be always string
 */
console.log('/* Computed properties */');
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
	console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

/*
 * Property value shorthand
 */
console.log('/* Property value shorthand */');
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('ellie', 30);
console.log(person4);

function makePerson(name, age) {
	// return object
	return { name, age };
	/* or */
	return { name: name, age: age };
}

// Constructor function
console.log('/* Constructor function */');
/* doesn't work on Node.js v18.12.1
const person5 = Human('ellien', 32);
console.log(person5);
function Human(name, age) {
	// this = {};
	this.name = name;
	this.age  = age;
	// return this;
}
*/

// in operator: proerty existence check (key in obj)
console.log('/* in operator */');
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);

/*
 * for..in
 * for..of
 */
console.clear();
console.log('/* for in */');
for (let key in ellie) {
	console.log(key);
}
console.log('/* for of */');
const array = [1, 2, 3, 4, 5];
for (let value of array) {
	console.log(value);
}

//return 0;

/*
 * cloning
 */
console.clear();
console.log('/* cloning */');
const user = { name: 'ellie', age: 20 };
const user2 = user;
user2.name = 'coder';
console.log(user);

const user4 = {};
Object.assign(user4, user);
user4.name = 'rider';
console.log(user4);

const user5 = Object.assign({}, user);
user5.name = 'writer';
console.log(user5);

const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);

