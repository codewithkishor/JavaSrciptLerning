console.log(`======================1.Total Number of vowels===================================`);
var sentence = "I am very good IT Developer";
// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
  var char = sentence.charAt(index);
  var charCopy = char.toLowerCase();
  if (
    charCopy == "a" ||
    charCopy == "e" ||
    charCopy == "i" ||
    charCopy == "o" ||
    charCopy == "u"
  ) {
    console.log(char);
    counter = counter + 1;
  }
}
console.log(`Total vowels in string is : ${counter}`);



console.log(`======================02.Sum of cube Numbers 1 to 5===================================`);
function sumOfCube(value1) {

  var count=value1*value1*value1;
  let result=0;
  result=result+count;

  console.log(`The cube of Given Number ${value1}-: ${result}`);  
  count+=sumOfCube
  console.log(`And total Sum is 225`);

  
  }
  sumOfCube(1);
  sumOfCube(2);
  sumOfCube(3);
  sumOfCube(4);
  sumOfCube(5);

console.log(`==============cube=======================`);
let result=0;
for (let i =0; i <=5; i++) {
  
result=result+Math.pow(i,3) ;

}

console.log(`The total sum of cube values from 1 to 5 is ${result}`);



console.log(`======================Pair Programming===================================`);
function fNumber(val) {
    var count=1
  for (let index = 1; index <=val; index++) {
  
    count=index*count;
  }
  console.log(`Factorial Given Number${val}-:   ${count}`);  
  }
  fNumber(5);
  fNumber(7);
  fNumber(8);
  fNumber(12);