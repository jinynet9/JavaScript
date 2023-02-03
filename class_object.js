
'use strict';

/*
 * class
 * - template
 * - declare once
 * - no data in
 *
 * object
 * - instance of a class
 * - created many times
 * - data in
 *
 * JavaScript classes
 * - introduced in ES6
 * - syntactical sugar over prototype-based inheritance
 */

/*
 * Class declarations
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

// object
console.log('/* Object */');
const steve = { name: 'steve', age: 32 };	// 'object literal' syntax
console.log(`objectect name: ${steve.name}, age: ${steve.age}`);

const ellie = new Person('ellie', 20);		// 'object constructor' syntax
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


/*
 * Getter and setters
 */
class User {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName  = lastName;
		this.age       = age;
	}

	get age() {
		return this._age;
	}
	set age(value) {
		this._age = value < 0 ? 0 : value;
	}
}

console.log('/* Getter and setters */');
const user1 = new User('Steve', 'Job', -3);
const user2 = new User('Stevz', 'Joz', 12);

console.log(user1.age);
console.log(user2.age);

/*
 * Public & Private
 */
class Experiment {
	publicField = 2;

	#privateField = -2;
}
console.log('/* Public & Private */');
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

/*
 * Static properties and methods
 */
class Article {
	constructor(number) {
		this.articleNumber = number;
	}

	static publisher = 'Dream Coding';

	static printPublisher() {
		console.log(Article.publisher);
	}
}

console.log('/* Static properties and methods */');
console.log(Article.publisher);
Article.printPublisher();

/*
 * Inheritance
 * a way for one class to extend another class
 */
class Shape {
	constructor(width, height, color) {
		this.width  = width;
		this.height = height;
		this.color  = color;
	}

	draw() {
		console.log(`drawing ${this.color} color!`);
	}

	getArea() {
		return this.width * this.height;
	}
}

class Rectangle extends Shape {
}

class Triangle extends Shape {
	getArea() {
		return super.getArea() / 2;
	}

	// overriding
	toString() {
		return `Triangle color: ${this.color}`;
	}
}

console.log('/* Inheritance */');
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
console.log(rectangle.toString());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());
console.log(triangle.toString());

/*
 * instanceOf
 * Class checking
 */
console.log('/* instanceOf */');
console.log(rectangle instanceof Rectangle);	/* true */
console.log(triangle instanceof Rectangle);		/* false */
console.log(triangle instanceof Triangle);		/* true */
console.log(triangle instanceof Shape);			/* true */
console.log(triangle instanceof Object);		/* true */

