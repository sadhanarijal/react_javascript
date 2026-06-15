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
// 1. Create a base Class Person with name and age properties.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const p1 = new Person("Sadhana Rijal", 19);

// 2. Add a prototype method describe() to the Person class.
Person.prototype.describe = function() {
  return `${this.name} is ${this.age} years old.`;
};
console.log("Task 2:", p1.describe());

// 3. Create a subclass Student that extends Person with a studentId property.
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
}
const s1 = new Student("Sadhana Rijal", 19, "STU-1992");

// 4. Add an instance method study() inside the Student class.
Student.prototype.study = function(subject) {
  return `${this.name} is studying ${subject}.`;
};
console.log("Task 4:", s1.study("React.js"));

// 5. Override the describe() method inside the Student class.
class OverriddenStudent extends Student {
  describe() {
    return `${this.name} (Age: ${this.age}) has an ID of ${this.studentId}.`;
  }
}
const s2 = new OverriddenStudent("Sadhana Rijal", 19, "STU-1992");
console.log("Task 5:", s2.describe());

// 6. Create a static method inside Person to validate adulthood.
class StaticPerson extends Person {
  static isAdult(age) {
    return age >= 18;
  }
}
console.log("Task 6: Is adult?", StaticPerson.isAdult(19));

// 7. Implement a getter property for uppercase formatting of name.
class GetterPerson extends Person {
  get upperName() {
    return this.name.toUpperCase();
  }
}
const s3 = new GetterPerson("Sadhana Rijal", 19);
console.log("Task 7:", s3.upperName);

// 8. Implement a setter property to validate and update age values.
class SetterPerson extends Person {
  set updateAge(newAge) {
    if (newAge > 0 && newAge < 120) this.age = newAge;
  }
}
const s4 = new SetterPerson("Sadhana Rijal", 19);
s4.updateAge = 20;
console.log("Task 8: New Age:", s4.age);

// 9. Use a private field (#) inside a class to encapsulate private data.
class EncapsulatedPerson {
  #secretToken = "SECURE_TOKEN_19";
  constructor(name) {
    this.name = name;
  }
  getSecret() {
    return this.#secretToken;
  }
}
const s5 = new EncapsulatedPerson("Sadhana Rijal");
console.log("Task 9: Encapsulated field value:", s5.getSecret());

// 10. Instantiate multiple instances from an extended subclass into an array and loop.
const studentRegistry = [
  new Student("Sadhana Rijal", 19, "STU-01"),
  new Student("Rohan Shrestha", 21, "STU-02")
];
studentRegistry.forEach(s => console.log(`Task 10 Loop: ${s.name} - ID: ${s.studentId}`));
//promises and async/await
// 1. Create a Promise that resolves with a generic success string.
const successPromise = new Promise((resolve) => {
  resolve("Task 1: Core operational promise successfully completed!");
});
successPromise.then(console.log);

// 2. Create a simulated asynchronous Promise that resolves after 2 seconds.
const delayFetch = new Promise((resolve) => {
  setTimeout(() => resolve("Task 2: Fetched profile data for Sadhana Rijal"), 2000);
});
delayFetch.then(console.log);

// 3. Create a conditional Promise that rejects if age is below threshold.
const verifyAgeLimit = (age) => {
  return new Promise((resolve, reject) => {
    if (age >= 18) resolve("Task 3: Access granted.");
    else reject("Task 3: Error: User is underage.");
  });
};
verifyAgeLimit(19).then(console.log).catch(console.error);

// 4. Chain multiple promises using .then() to process consecutive text changes.
const transformName = (name) => Promise.resolve(name);
transformName("Sadhana Rijal")
  .then(res => res.toUpperCase())
  .then(upper => console.log("Task 4 Chained:", upper));

// 5. Handle runtime Promise errors globally using a trailing .catch() handler.
const faultyPromise = () => Promise.reject("Task 5: Connection timed out.");
faultyPromise().catch(err => console.log("Task 5 Caught:", err));

// 6. Write an asynchronous function using async/await syntax structure.
async function basicAsync() {
  return "Task 6: Resolved value via async declaration syntax";
}
basicAsync().then(console.log);

// 7. Use the await keyword to suspend processing until a delay promise fulfills.
async function resolveDelayed() {
  const data = await Promise.resolve("Task 7: Executed inline awaited resolution data");
  console.log(data);
}
resolveDelayed();

// 8. Wrap async/await expressions in a try/catch block for clean error interception.
async function criticalProcess() {
  try {
    await Promise.reject("Task 8: Database operational error occurs.");
  } catch (err) {
    console.log("Task 8 Handled Context:", err);
  }
}
criticalProcess();

// 9. Execute independent promises concurrently using the Promise.all() iterable.
const pA = Promise.resolve("User: Sadhana Rijal");
const pB = Promise.resolve("Verified Age: 19");
Promise.all([pA, pB]).then(res => console.log("Task 9 Concurrent All:", res));

// 10. Implement Promise.race() to extract the fastest returning promise completion.
const fastResponse = new Promise(res => setTimeout(() => res("Fast server response"), 500));
const slowResponse = new Promise(res => setTimeout(() => res("Slow server response"), 1500));
Promise.race([fastResponse, slowResponse]).then(winner => console.log("Task 10 Race Winner:", winner));
