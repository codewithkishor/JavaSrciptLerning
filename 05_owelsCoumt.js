var sentence = "Yes Just do it man, I know you can";
// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
  var char = sentence.charAt(index);
  if (
    char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  ) {
    console.log(char);
    counter = counter + 1;
  }
}
console.log(`Total vowels in string is : ${counter}`);

console.log(`optimisation`); //may or may not be asked in interview

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

console.log(`========Reverse String=====`);
var sentence = "Yes Just do it man, I know you can";
// initi   cond  update
var reverseString = "";
var lastCharPosition = sentence.length - 1;
for (let index = lastCharPosition; index >= 0; index--) {
  var char = sentence.charAt(index);
  reverseString = reverseString.concat(char);
  // console.log(char);
}
console.log(reverseString);

var sentence = "Yes Just do it man, I know you can";
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

console.log(`===========reverseString=====`);

var sentence = "Yes Just do it man, I know you can";
// initi   cond  update
var reverseString = "";
var lastCharPosition = sentence.length - 1;
for (let index = lastCharPosition; index >= 0; index--) {
  var char = sentence.charAt(index);
  reverseString = reverseString.concat(char);
  // console.log(char);
}
console.log(reverseString);

// print 5  1000
var counter = 1;
while (counter <= 1000) {
  console.log(5);
  counter = counter + 1;
}
