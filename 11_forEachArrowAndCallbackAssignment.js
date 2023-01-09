console.log(
  `1. Array element with its index using forEach( ) with arrow function`
);
const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
array_numbers.forEach((element, index) =>
  console.log(`Index is ${index}: of Array element ${element}`)
);
console.log(`=======================================================`);
console.log(
  `2. Positive element with its index using forEach( ) with arrow function`
);
array_numbers.forEach((element) => {
  if (element > 0) console.log(`The element :${element} Positive.`);
});
console.log(`=======================================================`);
console.log(
  `3. Negative number array using forEach( ) with arrow function`
);
const negativeNumbers = [];
array_numbers.forEach((element) => {
  if (element < 0) negativeNumbers.push(element);
});
console.log(`Negative Number array is : [${negativeNumbers}]`);
console.log(`=======================================================`);
console.log(
  `4. Even number array using forEach( ) with arrow function`
);
array_numbers.forEach((element) => {
  if (element % 2 === 0) 
  console.log(`Even numbers ${element}`);
});
console.log(`=======================================================`);
console.log(
  `5. Sum of all array using forEach( ) with arrow function`
);
let sum = 0;
array_numbers.forEach((element) => {
  sum += element;
});
console.log(sum);

array_numbers.forEach((element, index) => {
  if (index % 2 === 0) console.log(element);
});
