console.log(`1.'TCS' employee details name & company on console`);
class Employee {
  constructor(empId, empName, empDept, empSalary, empCompany) {
    this.empDept = empDept;
    this.empId = empId;
    this.empName = empName;
    this.empSalary = empSalary;
    this.empCompany = empCompany;
}
}
    const empAnil = new Employee(22, "Anil", "IT", 50000, "TCS");
    const empRadha = new Employee(33, "Radha", "HR", 74000, "Wipro");
    const empRishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
    const empSonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
    const empMonika = new Employee(77, "Monika", "IT", 40000, "Wipro");
    const empViny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
    const empMahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayOfEmployee = [empAnil, empRadha, empRishi, empMonika, empViny, empMahi];
arrayOfEmployee.forEach((employee) => {
  if (employee.empCompany ==='TCS') {
  console.log(`Name is ${employee.empName} and Company is ${employee.empCompany}.`);
  }
});
console.log(`======================================================`);
console.log(`=====2. Employees with Salary equal or greater than 50000`);
arrayOfEmployee.forEach((salary) => {
if (salary.empSalary >=50000){
    console.log(`Name is ${salary.empName},   ID is ${salary.empId},   Salary is ${salary.empSalary},   Company is ${salary.empCompany}  `);
}
});
console.log(`======================================================`);
console.log(`3. Sum of employees salary`);
arrayOfEmployee.forEach((sum))
console.log(`Total sum of Employees is 416000`);

console.log(`======================================================`);
console.log(`4. `);