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
     
      console.log(`1. All the employees from 'Wipro' company`);
      const arrayEmps = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];
      const wiproEmps = arrayEmps.filter(employee => employee.empCompany == "Wipro");
      wiproEmps.forEach(employee => console.log(`Employee Id: ${employee.empId}, Employee Name: ${employee.empName}, Company Name: ${employee.empCompany}, Department :${employee.empDept}, Salary :${employee.empSalary}`));
console.log(`===============================================`);
  console.log(`2. All the employees from 'IT' OR 'HR' dept`);
      const ItAndHrEmps = arrayEmps.filter(employee => employee.empDept == "IT" || employee.empDept === "HR");
      ItAndHrEmps.forEach(employee => console.log(`Employee Id: ${employee.empId}, Employee Name: ${employee.empName}, Company Name: ${employee.empCompany}, Department :${employee.empDept}, Salary :${employee.empSalary}`));

      console.log(`===============================================`);
  console.log(`3. All the employees whose emp id's are greater than 50`);
  const empsWithIdGreaterThan50 = arrayEmps.filter(employee => employee.empId > 50);
  empsWithIdGreaterThan50.forEach(employee =>console.log(`Employee Id: ${employee.empId}`));
      
  console.log(`===============================================`);
  console.log(`4. All the employees whose names start with letter 'A' or 'V' or 'M'`);
const empsWithNameStartingWithA = arrayEmps.filter(employee => employee.empName.startsWith("A") || employee.empName.startsWith("V") || employee.empName.startsWith("M"));
  empsWithNameStartingWithA.forEach(employee =>console.log(`Employee Name: ${employee.empName}`));
      
  console.log(`===============================================`);
  console.log(`5. The average salary of the employee for all the department`);
const totalSalary = arrayEmps.reduce((acc, emp) => acc + emp.empSalary, 0);
const averageSalary = totalSalary / arrayEmps.length;
console.log(`Average of All department is ${averageSalary}`);


console.log(`===============================================`);
console.log(`6. The average salary for 'IT' department`);
const itEmps = arrayEmps.filter(emp => emp.empDept === "IT");
const totalItSalary = itEmps.reduce((acc, emp) => acc + emp.empSalary, 0);
const averageItSalary = totalItSalary / itEmps.length;
console.log(`Average of IT department is ${averageItSalary}`);