const arrayRollNumber = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];

console.log(`==================Given Array=======================`);
console.log(arrayRollNumber);
console.log(`=====================================================`);
console.log(`==================1. Reversed Given Array=======================`);
arrayRollNumber.reverse();
console.log(arrayRollNumber);
console.log(`=====================================================`);
console.log(`==================2. Use of sort() =======================`);
arrayRollNumber.sort();
console.log(arrayRollNumber);
console.log(`=====================================================`);
console.log(`==================3. Ascending order array with custom logic=======================`);
arrayRollNumber.sort((a, b) => {
    return a > b ? 1 : -1; 
  });
  console.log(arrayRollNumber);
console.log(`=====================================================`);
console.log(`==================4. Greatest number from array =======================`);
temp = 0;
arrayRollNumber.forEach((element) => {
  if (temp < element) {
    temp = element;
  }
});
console.log(`The greatest number is : ${temp}`);
console.log(`=====================================================`);
console.log(`==================5. Smallest number from array =======================`);
temp = 11;
arrayRollNumber.forEach((element) => {
  if (temp > element) {
    temp = element;
  }
});
console.log(`The smallest number is : ${temp}`);
console.log(`=====================================================`);
console.log(`==================6. Removed duplicate from array =======================`);
const myArray = [...new Set(arrayRollNumber)];
console.log(myArray);