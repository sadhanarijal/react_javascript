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
