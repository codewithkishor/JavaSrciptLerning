console.log(`========== Perform Clone ===========`);
const arraynums =[20, 3, 4, 56, 90, 400, 49 ];
console.log(arraynums);
cloneArray = arraynums;
console.log(`Original Array : ${arraynums}`);
cloneArray.push(55, 66);
console.log(`Update cloned array :${cloneArray}`);

let arrayNum = [... arraynums];
console.log(arraynums);
arrayNum.push(10, 25);
console.log(arrayNum);
console.log(arraynums);



const employee_info = {
    emp_id : 27,
    emp_name : "John Doe",
    salary : {
        july_month : "40,0000INR",
        aug_month : "50,0000INR",
        jun_month : "65,0000INR"
    },
    address : {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch pokli, 431202",
        },
        city: "Mumbai",
        state: "Maharshtra",
        country: "India"
    },
    mobiles:["+91 8600 3456 88", "1800-4567 32", "+91- 9096 5678 77"], 
}
let deepCopy =JSON.parse(JSON.stringify(employee_info));
console.log(deepCopy);
console.log(deepCopy.address);
console.log(`${employee_info.mobiles}`);
let upSal=deepCopy.salary.july_month="80k";
console.log(`Update property 'July_month' salary to 80k :  ${upSal}`);
console.log(deepCopy.salary);
let upCountry = employee_info.address.country="United kindom";
console.log(`Update Country name : ${upCountry}`);
console.log(employee_info.address);
console.log(`----------- 6.c = Log- Update values for original and cloned object on console -------`);
console.log(`${employee_info}`);
let empUpdate=employee_info;
console.log(`${empUpdate}`);