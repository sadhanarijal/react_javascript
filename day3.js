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
