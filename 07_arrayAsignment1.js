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
fruits.splice(4,1);

console.log(`Array after removel of "Mango" is "${fruits}".`);

console.log(`================================================================`);
console.log(`Q.4 Add Pinapple to the array`);
var addFruits=["Papaya","Banana","Orange","Apple","Water Melon"];
addFruits.push("Pineapple");
console.log(addFruits);

console.log(`================================================================`);
console.log(`Q.5 Insert an element "Dragon Fruit" before "Water Melon" to the array`);
var addFruits=["Papaya","Banana","Orange","Apple","Water Melon","Pineapple"];
addFruits.splice(4,0,"Dragon Fruit");
console.log(addFruits);

console.log(`================================================================`);
console.log(`Q.6 Replace "Orange" with "Kiwi" to the array`);
addFruits.splice(2, 1,"Kiwi");
console.log(addFruits);
console.log(`================================================================`);
console.log(`Q.7 Log elements from index 1 to 4`);
var addFruits=["Papaya","Banana","Kivi","Apple","Dragon Fruit","Water Melon","Pineapple"];
let sliceResult=addFruits.splice(1,4);
console.log(sliceResult);
console.log(`================================================================`);
console.log(`Q.8 Log Only last 3 elements`);
let lastThree=addFruits.length;
console.log(`Last three elements are ${lastThree-1}.`);
