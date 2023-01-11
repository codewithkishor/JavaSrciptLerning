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
      const map_employees = new Map();
      
map_employees.set(empAnil.empId, empAnil);
map_employees.set(empRadha.empId, empRadha);
map_employees.set(empRishi.empId, empRishi);
map_employees.set(empSonali.empId, empSonali);
map_employees.set(empMonika.empId, empMonika);
map_employees.set(empViny.empId, empViny);
map_employees.set(empMahi.empId, empMahi);

map_employees.forEach((employee) => {
  console.log(`${employee.empId} ===> Name: ${employee.empName}, Dept: ${employee.empDept}, Company: ${employee.empCompany}, Salary: ${employee.empSalary}`);
});
