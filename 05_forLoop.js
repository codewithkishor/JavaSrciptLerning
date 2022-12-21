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
for (var x = 0; x <= 15; x++) {
  if (x % 2 === 0) {
    console.log(x);
  }
}

console.log(`=============================================================`);
console.log(
  `===================Step 04 1st 15 Odd Number=========================`
);
for (var index = 0; index <= 15; index++) {
  if (index % 2 === 0)  {
    console.log(index);
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
for (let index = 1; index <= 10; index = index + 1) {
  var result = index * 10;
  console.log(result);
}
console.log(`=============================================================`);
console.log(
  `===================Step 05 Reverse Table of 10 =========================`
);
for (let index = 10; index >= 1; index = index - 1) {
  var result = index * 10;
  console.log(result);
}




console.log(`======================While loop=======================================`);





// Print numbers from 0 to 10
// initialization 0   condition <=10   update expre = ++
var i=0;  // i = 0 1 2  10  11
while (i<=10) {  // true true 
   console.log(i);  //0 1 2   10
   i++; // 1 2  10  11
}


// Print numbers from 0 to 10
// initialization 0   condition <=10   update expre = ++
var index =0;
do {
    console.log(index);
    index++;
} while (index<=10);

// Print 70 to 7 by decrementing each time 7
 // 70  63  56  
var index =70;
do {
  console.log(index);
   index = index-7; 
} while (index>=7);