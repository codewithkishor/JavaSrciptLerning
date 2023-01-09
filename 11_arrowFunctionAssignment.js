console.log(`=====1. Arrow function With no arguments and no return value ==========`);
let show = ()=>{
  console.log("Good Morning, Today is Monday.");
}
show();

console.log(`======================================`);
console.log(`=====2. Arrow function With 3 arguments and no return value ==========`);
const multiply = (num1, num2, num3 = 1) => {
             console.log(`The Multiplication is : ${num1*num2*num3}`);
}
multiply(5, 5, 2);
multiply(10, 4);

console.log(`======================================`);
console.log(`=====3. Arrow function With 5 arguments and return value ==========`);
const add = (num1, num2, num3, num4, num5) => {
  let result = num1 + num2 + num3 + num4 + num5;
 
  return result;
};
console.log(
  "The addition of the values is:  ",
  add(100, 100, 200, 349, 756)
);
console.log(
  "The addition of the values is: ",
  add("I am", " learning", " ES6", " features", " in depth")
);

