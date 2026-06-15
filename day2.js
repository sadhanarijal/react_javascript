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
