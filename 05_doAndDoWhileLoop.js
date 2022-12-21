// Print numbers from 5 to 15
// initialization 5   condition <=15   update expre = ++

// var i=5;  // i = 0 1 2  10  11
// while (i<=15) {  // true true 
//    console.log(i);  //0 1 2   10
//    i++; // 1 2  10  11
// }


// Print numbers from 0 to 10
// initialization 0   condition <=10   update expre = ++

// var index =0;
// do {
//     console.log(index);
//     index++;
// } while (index<=10);

// // Print 70 to 7 by decrementing each time 7
//  // 70  63  56  
// var index =70;
// do {
//   console.log(index);
//    index = index-7; 
// } while (index>=7);

console.log(`=======================Q1 5 TO 15 Number using while loop===========================`);
var i=5;  
while (i<=15) { 
   console.log(i);  
   i++;
}
console.log(`=====================================================================================================`);

console.log(`=======================Q2 50 TO 40 decreasing Number using while loop===========================`);
// initialization 50   condition >=40   update expre = ++
var i=50;  // i = 0 1 2  10  11
while (i>=40) {  // true true 
   console.log(i);  //0 1 2   10
   i--; // 1 2  10  11
}
console.log(`=====================================================================================================`);

console.log(`=======================Q3 first 15 Odd Number using while loop===========================`);
var index = 0;
while ( index <= 20) {
    if (index % 2 === 1)  {
      console.log(index);
    }
    index++;
  }
  console.log(`=====================================================================================================`);

  console.log(`=======================Q4 first 15 Even Number using while loop===========================`);
  var index = 0;
  while ( index <= 20) {
    if (index % 2 === 0)  {
      console.log(index);
    }
    index++;
  }
  console.log(`=====================================================================================================`);

  console.log(`=======================Q5 Table of 5 using do while loop===========================`);

  var index =1;
do {
    console.log(index * 5);
    index++; ; 
} while (index <= 10);
console.log(`=====================================================================================================`);

console.log(`=======================Q5 Table of 10 using do while loop===========================`);

  var index =1;
do {
    console.log(index * 10);
    index++; ; 
} while (index <= 10);
console.log(`=====================================================================================================`);
console.log(`=======================Q7 Table of 10 in reverse order using do while loop===========================`);

var index =100;
do {
  console.log(index * 1);
  index=index-10; 
} while (index >= 10);

