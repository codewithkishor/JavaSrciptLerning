
const arrayNums = [20, 3, 4, 56, 90, 400, 49];
const clone = arrayNums.slice();
clone.push(55, 66);
console.log(`1. The Original array is:[${arrayNums}]`);
console.log(`   The Cloned array is: [${clone}]`);
console.log(` ============================`);

console.log(`2. Deep clone of arrayNums using the spread operator`);

const cloneArray = [...arrayNums];
let pushArray=arrayNums.push(10, 25);
console.log(`The Original array is: [${arrayNums}]`);
console.log(`Deep Cloned array is: [${cloneArray}]` );

console.log(` ============================`);

const arrayEven = [2, 30, 14, 8];
const mergedArray = [...arrayNums, ...arrayEven];
console.log(`3. The Merged array is [${mergedArray}]`);
console.log(` ============================`);
console.log(`4. created the employeeInfo object`);
const employeeInfo = {
    empId: 27,
    empName: "John Doe", salary: {
    julyMonth: "40,0000 INR",
    augMonth: "50,0000 INR",
    junMonth: "65,0000 INR"
    },
    address: {
    locality: {
    colony: "OM Vrindavan Society", street: "Kanch Pokli, 431202",
    },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India"
    }, mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
    
  };
  console.log(` ============================`);
console.log(`5. log the employee details on the console`);
console.log(`  5a. Address: ${employeeInfo.address.locality.colony}, ${employeeInfo.address.city}, ${employeeInfo.address.state}, ${employeeInfo.address.country}`);
console.log(`  5b. Mobile numbers: ${employeeInfo.mobiles.join(`, `)}`);
console.log(` ============================`);
console.log(`6. Deep copy of the employeeInfo object using JSON.stringify()`);
let original = employeeInfo;
let cloneObj = JSON.parse(JSON.stringify(employeeInfo));

let cloneSal=cloneObj.salary.julyMonth= "80,0000 INR";
let cloneCon=original.address.country = 'United Kingdom';

console.log(` 6a. Updated Cloned July month salary: ${cloneSal}`);
console.log(` 6b. Updated Cloned Contry: ${cloneCon}`);




