console.log(`==========Assignment-01 on Ternary Operator=========`);
console.log(`1.Greatest Number among two number`);

var number = function (num1, num2) {
  var result = num1 > num2 ? num1 : num2;
  console.log(`    Greatest number amongst ${num1} and ${num2} is : ${result}`);
};
number(10, -10);
number(800, 899);

console.log(
  `=================================================================================`
);
console.log(`2.Even or odd number`);

var evenOdd = function (value) {
  var result = value % 2 == 0 ? "True" : "False";
  console.log(`    The value ${value} is Even:- ${result}`);
};
evenOdd(29);
evenOdd(44);
evenOdd(0);
evenOdd(101);

console.log(
  `=================================================================================`
);
console.log(`2.Even or odd Lenght`);

function evenOdd1(value) {
  var result = value.length;
  var finalResult = result % 2 == 0 ? "EVEN" : "ODD";
  console.log(
    `  The word ${value} length is: ${result} and it's length is : ${finalResult} value`
  );
}
evenOdd1("JavaScript");
evenOdd1("developer");
evenOdd1("Google");
