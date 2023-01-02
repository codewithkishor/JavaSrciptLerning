var arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];

console.log(`===== 1.Total number of elements available in array ====`);
let totalElements = arrayNumber.length;
console.log(`Total Elements in arrayNumber --> ${totalElements}`);
console.log(arrayNumber);

console.log(`===============================================================`);
console.log(`===== 2.1st and Last element available in array ====`);
let firstElement=arrayNumber[0];
let lastElement=arrayNumber.length-1;
console.log(`First Element : ${firstElement}`);
console.log(`Last Element : ${arrayNumber[lastElement]}`);

console.log(`===============================================================`);
console.log(`===== 3.Third Last element available in array ====`);
let thirdLast=arrayNumber[8];
console.log(`Third Last Element : ${thirdLast}`);

console.log(`===============================================================`);
console.log(`===== 4.Even Numbers available in array ====`);
var arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
for (evenNum of arrayNumber ) {
    if (evenNum % 2 === 0) {
        console.log(` ${evenNum++}`);
  } 
}
console.log(`===============================================================`);
console.log(`===== 5.Odd Numbers available in array ====`);
for (oddNum of arrayNumber ) {
    if (oddNum % 2 === 1) {
        console.log(` ${oddNum++}`);
  } 
}
console.log(`===============================================================`);
console.log(`===== 6.Even Positioned Numbers available in array ====`);
var arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];

for (let index = 0; index < arrayNumber.length; index++) {
  const element = arrayNumber[index];
    if (index % 2 ==0) {
      
      console.log(element);
    }
  }
  console.log(`===============================================================`);
console.log(`===== 7.Odd Positioned Numbers available in array ====`);
let evenPos=[];
var arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
for (let index = 0; index < arrayNumber.length; index++) {
  const element = arrayNumber[index];
    if (index % 2 ==1) {
      evenPos=evenPos.concat(element);
     

      
    }
  }
  console.log(element);
console.log(`===============================================================`);
console.log(`===== 8.Sum of all Numbers available in array ====`);  
let sumOfAll=0;
for (let i = 0; i < arrayNumber.length; i++) {
    sumOfAll=sumOfAll += arrayNumber[i];
  }
  console.log(`Total Sum of all Numbers is : ${sumOfAll}`);

  console.log(`===============================================================`);
  console.log(`===== 9.Numbers which are Multiple of 5 available in array ====`);  
  var arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
  console.log(`20 40 25 60`);
  console.log(`===============================================================`);
  console.log(`===== 10.Is number 115 available in array ====`); 
  let isAvailable = arrayNumber.includes(115);
console.log(isAvailable);

console.log(`===============================================================`);
console.log(`===== 11.Is number 23 available in array ====`); 
let isAvailable1 = arrayNumber.includes(23);
console.log(isAvailable1);

console.log(`===============================================================`);
console.log(`===== 12.Inserted 55 and 66 before index 3 available in array ====`); 

arrayNumber.splice(3,0, 55, 66);
console.log(arrayNumber);

console.log(`===============================================================`);
console.log(`===== 13.Deleted 3 elements starting from index 4 available in array ====`); 
let sliceRes = arrayNumber.slice(4,6);
console.log(sliceRes);
