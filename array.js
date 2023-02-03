
'use strict';

/*
 * Declaration
 */
console.clear();
console.log('/* Declaration */');
const arr1 = new Array();
const arr2 = [1, 2];

/*
 * Index position
 */
console.clear();
console.log('/* Index */');
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);

/*
 * Looping over an array
 */
console.clear();
console.log('/* Looping */');
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}
console.log('/* for of */');
for (let fruit of fruits) {
	console.log(fruit);
}
console.log('/* forEach */');
fruits.forEach(function(fruit, index, array){
	console.log(fruit);
});
fruits.forEach((fruit) => {console.log(fruit)});

/*
 * Addtion, deletion, copy
 * shift, unshift are slower than pop, push
 */
console.clear();
console.log('/* push: add an item to the end */');
fruits.push('berry', 'melon', 'lemon');
console.log(fruits);

console.log('/* pop: remove an item from the end */');
fruits.pop();
console.log(fruits);

console.log('/* unshift: add an item to the beginning */');
fruits.unshift('peach', 'cherry');
console.log(fruits);

console.log('/* shift: remove an item from the beginning */');
fruits.shift();
console.log(fruits);

console.log('/* splice: remove an item by index position */');
fruits.splice(1, 2);
console.log(fruits);

console.log('/* splice & add */');
fruits.splice(1, 0, 'grape', 'pear');
console.log(fruits);

console.log('/* combine two array */');
const fruits2 = ['strawberry', 'cherry', 'blueberry' ];
const fruits3 = fruits.concat(fruits2);
console.log(fruits);
console.log(fruits3);

console.log('/* searching: indexOf, includes, lastIndexOf */');
fruits.push('cherry');
console.log(fruits);
console.log(fruits.indexOf('melon'));
console.log(fruits.indexOf('coconut'));
console.log(fruits.includes('melon'));
console.log(fruits.includes('coconut'));
console.log(fruits.indexOf('cherry'));
console.log(fruits.lastIndexOf('cherry'));

