
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

      const employees = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];

const tcsEmployees = employees.filter(employee => employee.empCompany === 'TCS');

tcsEmployees.forEach(employee => console.log(`Company Name: ${employee.empCompany}, Employee Name: ${employee.empName}`));

// Output:
// Company: TCS | Employee: Anil
// Company: TCS | Employee: Rishi
// Company: TCS | Employee: Vinayak




