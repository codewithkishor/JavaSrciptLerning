console.log(
  `===================Step 01 Increment Number=========================`
);
for (let index = 5; index <= 15; index = index + 1) {
  console.log(index);
}

console.log(`=============================================================`);
console.log(
  `===================Step 02 Decrementing Number=========================`
);
for (let index = 50; index >= 40; index = index - 1) {
  console.log(index);
}
console.log(`============================================`);
console.log(
  `===================Step 03 1st 20 Even Number=========================`
);
for (var x = 0; x <= 20; x++) {
  if (x % 2 === 0) {
    console.log(x);
  }
}

console.log(`=============================================================`);
console.log(
  `===================Step 04 1st 20 Odd Number=========================`
);
for (var x = 0; x <= 20; x++) {
  if (x === 0) {
  } else if (x % 2 === 0) {
  } else {
    console.log(x);
  }
}

console.log(`=============================================================`);
console.log(`===================Step 05 Table of 5=========================`);
let n = 5;
for (let i = 1; i <= 10; ++i) {
  console.log(n * i);
}
console.log(`=============================================================`);
console.log(`===================Step 05 Table of 10=========================`);
let num = 10;
for (let i = 1; i <= 10; ++i) {
  console.log(num * i);
}
console.log(`=============================================================`);
console.log(
  `===================Step 05 Reverse Table of 10 =========================`
);
let number = 10;
// for (let i = 1; i >= 10; i-1){
//     console.log(  number * i );
// }
Reverse = function (num) {
  var reversed_number = 0;
  while (num != 0) {
    reversed_number *= 10;
    reversed_number += number % 10;
    num -= num % 10;
    num /= 10;
  }
  return reversed_number;
};
console.log(num);
