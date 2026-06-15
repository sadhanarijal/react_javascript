// pure function
// Write a pure function multiply(a, b) that returns the product of two numbers.
function multiply(a, b) {
    return a * b;
}

// Create a pure function getFullName(firstName, lastName) that returns a concatenated full name with a space.
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// Write a pure function isEven(num) that returns true if the number is even, false otherwise.
function isEven(num) {
    return num % 2 === 0;
}

// Create a pure function capitalize(str) that returns the string with the first letter capitalized.
function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Write a pure function calculateArea(radius) that returns the area of a circle (use π ≈ 3.14).
function calculateArea(radius) {
    const PI = 3.14;
    return PI * radius * radius;
}

// Create a pure function getInitials(firstName, lastName) that returns initials like "D.S." for "Dipak Shrestha".
function getInitials(firstName, lastName) {
    if (!firstName || !lastName) return "";
    return `${firstName.charAt(0).toUpperCase()}.${lastName.charAt(0).toUpperCase()}.`;
}

// Write a pure function fahrenheitToCelsius(f) that converts Fahrenheit to Celsius.
function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}

// Create a pure function reverseString(str) that returns the reversed string.
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Write a pure function findMax(arr) that returns the largest number in an array.
function findMax(arr) {
    if (arr.length === 0) return undefined;
    return Math.max(...arr);
}

// Create a pure function formatDate(year, month, day) that returns a string in "DD/MM/YYYY" format.
function formatDate(year, month, day) {
    const paddedDay = String(day).padStart(2, '0');
    const paddedMonth = String(month).padStart(2, '0');
    return `${paddedDay}/${paddedMonth}/${year}`;
}
//Arrays & Objects
// 1. Create an array colors with 5 color names and log the third element.
const colors = ["red", "green", "blue", "yellow", "purple"];
console.log(colors[2]);

// 2. Create an object book with properties title, author, pages, and publishedYear.
const book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    pages: 208,
    publishedYear: 1988
};

// 3. Add a new property isRead: true to an existing book object immutably (return new object).
const updatedBook = { ...book, isRead: true };

// 4. Create an array of 3 objects, each representing a student with name and grade.
const students = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "A" }
];

// 5. Create a nested object company with properties name, location, and employees (an array of names).
const company = {
    name: "Tech Corp",
    location: "Kathmandu",
    employees: ["Ram", "Shyam", "Hari"]
};

// 6. From an array numbers =, create a new array with each value increased by 5 immutably.
const numbers = [1, 2, 3, 4];
const increasedNumbers = numbers.map(num => num + 5);

// 7. Create an object car and add a new property color immutably.
const car = { brand: "Toyota", model: "Corolla" };
const coloredCar = { ...car, color: "red" };

// 8. Create an array shoppingList and add a new item at the beginning immutably.
const shoppingList = ["milk", "bread", "eggs"];
const updatedShoppingList = ["apples", ...shoppingList];

// 9. Create an object profile with nested address object containing city and country.
const profile = {
    username: "dipak123",
    address: {
        city: "Lalitpur",
        country: "Nepal"
    }
};

// 10. From an array of objects products, create  new array with only name & price properties.
const products = [
    { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
    { id: 2, name: "Phone", price: 500, category: "Electronics" }
];
const simplifiedProducts = products.map(product => ({
    name: product.name,
    price: product.price
}));
// Array Methods (map, filter, reduce, find, forEach
// 1. Use map to double all numbers in.
const numbers1 =;
const doubledNumbers = numbers1.map(num => num * 2);

// 2. Use filter to get all even numbers from.
const numbers2 =;
const evenNumbers = numbers2.filter(num => num % 2 === 0);

// 3. Use reduce to calculate the sum of.
const numbers3 =;
const totalSum = numbers3.reduce((acc, curr) => acc + curr, 0);

// 4. Use find to get the first object with age > 18 from an array of user objects.
const users = [
    { name: "John", age: 15 },
    { name: "Jane", age: 22 },
    { name: "Alex", age: 19 }
];
const firstAdult = users.find(user => user.age > 18);

// 5. Use forEach to log each element of ["apple", "banana", "orange"] with its index.
const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// 6. Use map to extract only names from an array of user objects.
const usersList = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];
const namesOnly = usersList.map(user => user.name);

// 7. Use filter to get products with price < 100 from an array of product objects.
const itemsList = [
    { name: "Book", price: 50 },
    { name: "Watch", price: 150 },
    { name: "Pen", price: 10 }
];
const cheapProducts = itemsList.filter(product => product.price < 100);

// 8. Use reduce to find the maximum value in an array of numbers.
const numbers4 =;
const maxVal = numbers4.reduce((max, curr) => (curr > max ? curr : max), numbers4[0]);

// 9. Use map and filter together to get names of adults (age >= 18) in uppercase.
const crowd = [
    { name: "Sam", age: 16 },
    { name: "Sara", age: 21 },
    { name: "Tom", age: 18 }
];
const adultNamesUpper = crowd
    .filter(person => person.age >= 18)
    .map(person => person.name.toUpperCase());

// 10. Use forEach to build an HTML unordered list string from an array of items.
const listItems = ["Home", "About", "Contact"];
let htmlList = "<ul>";
listItems.forEach(item => {
    htmlList += `<li>${item}</li>`;
});
htmlList += "</ul>";
// Immutability Principles – 10 Practice Tasks
// 1. Update an object's age from 25 to 26 immutably using spread operator.
const userAge = { name: "Alice", age: 25 };
const updatedAgeUser = { ...userAge, age: 26 };

// 2. Add a new hobby to a person's hobbies array immutably.
const personHobbies = { name: "Bob", hobbies: ["reading", "gaming"] };
const updatedHobbiesPerson = { 
    ...personHobbies, 
    hobbies: [...personHobbies.hobbies, "cooking"] 
};

// 3. Remove the last element from an array immutably.
const numbersList =;
const arrayWithoutLast = numbersList.slice(0, -1);

// 4. Replace the second element in an array immutably.
const items = ["apple", "banana", "cherry"];
const replacedElementArray = items.map((item, index) => index === 1 ? "orange" : item);

// 5. Change a nested property address.city in an object immutably.
const profileData = { name: "Charlie", address: { city: "Kathmandu", country: "Nepal" } };
const updatedCityProfile = {
    ...profileData,
    address: {
        ...profileData.address,
        city: "Lalitpur"
    }
};

// 6. Add a new key-value pair to an object immutably.
const basicCar = { brand: "Tesla", model: "Model 3" };
const extendedCar = { ...basicCar, year: 2024 };

// 7. Remove a property deletedAt from an object immutably.
const record = { id: 101, data: "Active", deletedAt: "2026-06-15" };
const { deletedAt, ...cleanedRecord } = record;

// 8. Merge two arrays immutably into a new array.
const arr1 =;
const arr2 =;
const mergedArray = [...arr1, ...arr2];

// 9. Merge two objects immutably into a new object.
const obj1 = { name: "John" };
const obj2 = { role: "Admin" };
const mergedObject = { ...obj1, ...obj2 };

// 10. Update a specific object in an array of objects immutably (by id).
const employees = [
    { id: 1, name: "Sam", salary: 3000 },
    { id: 2, name: "Sara", salary: 4000 }
];
const updatedEmployees = employees.map(emp => 
    emp.id === 2 ? { ...emp, salary: 4500 } : emp
);
//Higher-Order Functions
// 1. Write a higher-order function repeat(action, times) that calls action function times times.
function repeat(action, times) {
    for (let i = 0; i < times; i++) {
        action(i);
    }
}

// 2. Create a function operate(arr, fn) that applies fn to each element using map.
function operate(arr, fn) {
    return arr.map(fn);
}

// 3. Write a function filterBy(arr, conditionFn) that returns filtered array using the provided condition.
function filterBy(arr, conditionFn) {
    return arr.filter(conditionFn);
}

// 4. Create a higher-order function logger(fn) that logs "before" and "after" calling fn.
function logger(fn) {
    return function (...args) {
        console.log("before");
        const result = fn(...args);
        console.log("after");
        return result;
    };
}

// 5. Write a function createAdder(x) that returns a new function adding x to its argument.
function createAdder(x) {
    return function (y) {
        return x + y;
    };
}

// 6. Create a higher-order function sortBy(arr, key) that sorts array of objects by given key.
function sortBy(arr, key) {
    return [...arr].sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    });
}

// 7. Write a function pipeline(...functions) that chains multiple functions (apply one after another).
function pipeline(...functions) {
    return function (initialValue) {
        return functions.reduce((acc, fn) => fn(acc), initialValue);
    };
}

// 8. Create a higher-order function withTax(taxRate) that returns a function to add tax to price.
function withTax(taxRate) {
    return function (price) {
        return price + (price * taxRate);
    };
}

// 9. Write a function debounce(fn, delay) that delays function execution (basic version).
function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

// 10. Create a higher-order function memoize(fn) that caches results of expensive pure functions.
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

