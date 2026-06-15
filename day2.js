//this and binding
// 1. Create object with name and method using this.
const profile = {
  name: "Sadhana Rijal",
  age: 19,
  displayInfo() {
    console.log(`Task 1: Name is ${this.name}, Age is ${this.age}`);
  }
};
profile.displayInfo();

// 2. Call method from another variable and see undefined.
const detachedDisplay = profile.displayInfo;
try {
  detachedDisplay();
} catch (e) {
  console.log("Task 2: Error or undefined because execution context 'this' is lost");
}

// 3. Fix with .bind().
const boundDisplay = profile.displayInfo.bind(profile);
boundDisplay();

// 4. Create two objects and use the same method with .bind().
const studentA = { name: "Sadhana Rijal", age: 19 };
const studentB = { name: "Ankit Sharma", age: 21 };

function introduce() {
  console.log(`Task 4: Student Name: ${this.name}, Age: ${this.age}`);
}

const introduceA = introduce.bind(studentA);
const introduceB = introduce.bind(studentB);
introduceA();
introduceB();

// 5. Use this inside a click handler (browser).
const mockDOMButton = {
  id: "sadhana-profile-btn",
  addEventListener: function(event, callback) {
    callback.call(this); 
  }
};

mockDOMButton.addEventListener("click", function() {
  console.log(`Task 5: Clicked element target ID is: ${this.id}`);
});

// 6. Write function in strict mode and log this.
function strictModeTest() {
  "use strict";
  console.log("Task 6: 'this' inside strict mode function is:", this);
}
strictModeTest();

// 7. Convert normal function to arrow and see difference.
const studentRecord = {
  name: "Sadhana Rijal",
  normalFn: function() {
    console.log(`Task 7 (Normal): Context resolved to ${this.name}`);
  },
  arrowFn: () => {
    console.log(`Task 7 (Arrow): Context inherited globally, name is ${this ? this.name : "undefined"}`); 
  }
};
studentRecord.normalFn();
studentRecord.arrowFn();

// 8. Create object with nested object and log this.
const institution = {
  collegeName: "Kathmandu University",
  enrolledStudent: {
    name: "Sadhana Rijal",
    logDetails() {
      console.log(`Task 8: Immediate execution context name is ${this.name}`);
    }
  }
};
institution.enrolledStudent.logDetails();

// 9. Use .call() to borrow method.
const personTemplate = {
  name: "Unknown",
  greetUser(greeting) {
    console.log(`Task 9: ${greeting}, my name is ${this.name}`);
  }
};

const userTarget = { name: "Sadhana Rijal" };
personTemplate.greetUser.call(userTarget, "Namaste");

// 10. Use .apply() to borrow method.
const registrationSystem = {
  processRecord(status, year) {
    console.log(`Task 10: Processing ${this.name}, Age: ${this.age}. Status: ${status}, Year: ${year}`);
  }
};

const member = { name: "Sadhana Rijal", age: 19 };
registrationSystem.processRecord.apply(member, ["Active", 2026]);
//classes and inheritance 
// 1. Create class Vehicle.
class Vehicle {
  // Task 1: Defined base vehicle layout
}

// 2. Add constructor.
class VehicleWithConstructor {
  constructor(brand) {
    this.brand = brand;
  }
}

// 3. Add method drive().
class CompleteVehicle {
  constructor(brand) {
    this.brand = brand;
  }
  drive() {
    console.log(`Task 3: Driving the ${this.brand}`);
  }
}
const myCar = new CompleteVehicle("Toyota");
myCar.drive();

// 4. Extend class Bike.
class Bike extends CompleteVehicle {
  // Task 4: Bike inherits everything from CompleteVehicle
}
const myBike = new Bike("Yamaha");
myBike.drive();

// 5. Override drive().
class CustomBike extends CompleteVehicle {
  drive() {
    console.log(`Task 5: Riding the ${this.brand} bike on two wheels`);
  }
}
const sportsBike = new CustomBike("Honda");
sportsBike.drive();

// 6. Create class Student.
class Student {
  constructor(name) {
    this.name = name;
  }
}

// 7. Add marks property.
class GradedStudent {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
  showMarks() {
    console.log(`Task 7: ${this.name} scored ${this.marks}%`);
  }
}
const s1 = new GradedStudent("Sadhana Rijal", 19);
s1.showMarks();

// 8. Inherit class Programmer.
class Person {
  constructor(name) {
    this.name = name;
  }
  work() {
    console.log(`${this.name} is working`);
  }
}
class Programmer extends Person {
  // Task 8: Programmer inherits work() from Person
}
const p1 = new Programmer("Sadhana Rijal");
p1.work();

// 9. Call parent method using super().
class AdvancedProgrammer extends Person {
  constructor(name, language) {
    super(name);
    this.language = language;
  }
  work() {
    super.work();
    console.log(`Task 9: Coding features in ${this.language}`);
  }
}
const p2 = new AdvancedProgrammer("Sadhana Rijal", "JavaScript");
p2.work();

// 10. Create multiple child classes.
class ParentVehicle {
  constructor(type) {
    this.type = type;
  }
}
class CarChild extends ParentVehicle {}
class TruckChild extends ParentVehicle {}

const carInstance = new CarChild("Sedan");
const truckInstance = new TruckChild("Cargo");
console.log(`Task 10: Created instances of ${carInstance.type} and ${truckInstance.type}`);

//promises and async/await
// 1. Create promise that resolves.
const resolvePromise = new Promise((resolve) => {
  resolve("Example User");
});

// 2. Create promise that rejects.
const rejectPromise = new Promise((resolve, reject) => {
  reject("Condition not met");
});

// 3. Use .then().
resolvePromise.then((data) => {
  console.log("Task 3 Resolved data:", data);
});

// 4. Use .catch().
rejectPromise.catch((error) => {
  console.log("Task 4 Rejected data:", error);
});

// 5. Convert to async/await.
async function handlePromise() {
  const data = await resolvePromise;
  console.log("Task 5 Async/Await:", data);
}
handlePromise();

// 6. Wait 2 seconds using setTimeout promise.
const delay = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Waited 2 seconds");
  }, 2000);
});
delay.then((msg) => console.log("Task 6:", msg));

// 7. Create function that returns promise.
function getStudentInfo() {
  return new Promise((resolve) => {
    resolve({ name: "Jane Doe", age: 20 });
  });
}

// 8. Chain promises.
getStudentInfo()
  .then((student) => {
    return student.name;
  })
  .then((name) => {
    console.log("Task 8 Chained Name:", name);
  });

// 9. Use await inside async function.
async function showAge() {
  const student = await getStudentInfo();
  console.log("Task 9 Awaited Age:", student.age);
}
showAge();

// 10. Use multiple awaits.
async function showAllDetails() {
  const student = await getStudentInfo();
  const msg = await delay;
  console.log(`Task 10: ${student.name}, ${student.age}. Status: ${msg}`);
}
showAllDetails();
//modules
// 1. Export a variable.
export const studentName = "Sadhana Rijal";

// 2. Export a function.
export function checkAge(age) {
  return age >= 18;
}

// 3. Import a function.
import { checkAge } from "./module.js";

// 4. Export default.
export default function logMessage() {
  return "System active";
}

// 5. Import default.
import myCustomLogger from "./module.js";

// 6. Export multiple variables.
export const varA = "Sadhana";
export const varB = 19;

// 7. Rename module on import.
import { studentName as profileName } from "./module.js";

// 8. Export class.
export class StudentRecord {
  constructor(name) {
    this.name = name;
  }
}

// 9. Export an object.
export const metadata = { country: "Nepal", status: "Active" };

// 10. Import everything using *.
import * as FullNamespace from "./module.js";
