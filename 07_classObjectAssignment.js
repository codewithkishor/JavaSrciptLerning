// 1. Define a class for Vehicle
class Vehicle {
    // Properties or attributes or data members
    constructor(make, model, year, color) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }
  }
  
  // Create 5 objects from the Vehicle class and log them to the console
  let car1 = new Vehicle("Ford", "Mustang", 2020, "red");
  let car2 = new Vehicle("Toyota", "Camry", 2019, "white");
  let car3 = new Vehicle("Honda", "Accord", 2018, "silver");
  let car4 = new Vehicle("Chevrolet", "Corvette", 2017, "blue");
  let car5 = new Vehicle("Tesla", "Model 3", 2016, "black");
  console.log(car1, car2, car3, car4, car5);
  
  // 2. Define a class for College
  class College {
    // Properties or attributes or data members
    constructor(name, location, founded, enrollment) {
      this.name = name;
      this.location = location;
      this.founded = founded;
      this.enrollment = enrollment;
    }
  
    // Member function to log the details of the college
    logDetails() {
      console.log(`
        College: ${this.name}
        Location: ${this.location}
        Founded: ${this.founded}
        Enrollment: ${this.enrollment}`);
    }
  }
  
  // Create 4 objects from the College class
  let college1 = new College("Harvard", "Cambridge, MA", 1636, 22000);
  let college2 = new College("Yale", "New Haven, CT", 1701, 19000);
  let college3 = new College("Princeton", "Princeton, NJ", 1746, 8000);
  let college4 = new College("Columbia", "New York, NY", 1754, 29000);
  
  // Invoke the "logDetails" method for each object
  college1.logDetails();
  college2.logDetails();
  college3.logDetails();
  college4.logDetails();
  
  // 3. Write a function to traverse an object using a for-in loop
  function traverseObject(obj) {
    for (const key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
  
  // 3.1 Call the "traverseObject" function with an object from the College class
  traverseObject(college1);
  console.log(college1);

  