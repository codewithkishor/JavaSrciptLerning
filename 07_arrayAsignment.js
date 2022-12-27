const fruitsSeasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
let totalElements = fruitsSeasonal.length;
let firstElement = fruitsSeasonal[0];
let lastElement = fruitsSeasonal[4];

console.log(`Given Array is ${fruitsSeasonal}`);
console.log(
  `1. First element in array is "${firstElement}" and last Element is "${lastElement}".`
);

console.log(`================================================================`);
console.log(`Q.2 Add Papaya element before Banana Element`);
let totalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
totalFruits.unshift("Papaya");
console.log(totalFruits);

console.log(`================================================================`);
console.log(`Q.3 Remove Mango from array`);
var fruits = ["Papaya", "Banana", "Orange", "Apple", "Mango", "Water Melon"];
var result = fruits.splice("Mango");
console.log(result);
