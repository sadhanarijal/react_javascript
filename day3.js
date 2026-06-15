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
