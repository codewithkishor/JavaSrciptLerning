var num1 = 10;
var num2 = 5;
console.log(`Arithmatic Operator`);
var addResult = num1 + num2;
console.log(`Addition is ${addResult}`);

var addResult = num1- num2;
console.log(`Substraction is ${addResult}`);

var addResult = num1 * num2;
console.log(`Multiplication is ${addResult}`);

var divResult = num1 /num2;
console.log(`Division is ${divResult}`);

var modulusResult= num1 % num2;
console.log(`Modulus is ${modulusResult}`);

var modulusResult= num1 % 4;
console.log(`Modulus is ${modulusResult}`);

console.log(`=======Assignment Operator=====`);
var modulusResult= num1 % 4;
console.log(`Modulus is ${modulusResult}`);

var num1 = 10;
var num2 = 5;

//Compound Addition
num1 += num2;
var result= num1 =num2; //num1=num1+num2
                         //num1=15;
console.log(`Compound Addition is ${num1}`);
console.log(`Compound Substraction is ${num1-=num2}`); //num1=


//Compound Substraction
var num1 = 10;
var num2 = 5;
console.log(`Compound Substraction is ${num1-=num2}`);

console.log(`============ Unary Operators =================`);
var num3 = 10;
var result = ++num3; // num3 = num3 + 1;
console.log(`Increment operator  result is ${result}`);

var num4 = 5;
var res = --num4; //num4 -1;
console.log(`Decrement operator result is ${res}`);

console.log(`============ Comparison Operators =================`);
var num1 = 10;
var num2 = 5;
var num3 = 10;
var result = num1 > num2;
console.log(`> Operator - Greater than ${result}`);
console.log(`> Operator - Greater than ${num1>num3}`);

var result =  num2 > num1;
console.log(`> Operator - Greater than ${result}`);

var result = num1 >= num2;
console.log(`>= Operator - Greater than  equal ==>${result}`);

var result = num1 >= num3;
console.log(`>= Operator - Greater than  equal ==>${result}`);