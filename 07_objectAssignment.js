let professor = {};

// 1. Add properties to the object
professor.name = "Jane Doe";
professor.age = 45;
professor.gender = "female";

// 2. Add a nested object with degrees
professor.degrees = {
  engineering: "CSC",
  PHD: "Adv Computing",
  masters: "Computer Science"
};

// 3. Add a nested object with certificates
professor.certificates = {
  "Hacker Rank Participation": true,
  "Certificate in IFE course": true,
  "Certificate in Adv Programming": true
};

// 4. Add a function that concatenates all degrees and logs the result to the console
professor.listDegrees = function() {
  let degreeList = "";
  for (const degree in this.degrees) {
    degreeList += `${degree}: ${this.degrees[degree]}, `;
  }
  console.log(`Teacher degrees are total degrees are: ${degreeList}`);
};

// 5. Add a new property and log it to the console
professor.yearsExperience = 20;
console.log(professor.yearsExperience);

// 6. Modify an existing property and log the complete object to the console
professor.age = 50;
console.log(professor);

// 7. Delete a certificate from the nested object
delete professor.certificates["Hacker Rank Participation"];

// 8. Add a new certificate to the nested object
professor.certificates["Certificate in Data Structures"] = true;

// 9. Log the nested object "certificates" to the console
console.log(professor.certificates);
