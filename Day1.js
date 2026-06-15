//Create two variables, firstName and lastName, and combine them into a greeting message using template literals. Log the message.
let firstName = "Sadhana";
let lastName = "Rijal";

// Combine using template literals with backticks
let greeting = `Hello, my name is ${firstName} ${lastName}.`;
console.log(greeting); 
//t2:Create a let variable inside a block {} and try to access it outside. Then do the same with a const variable. Observe the errors.
{
  let blockLet = "I am a let";
  const blockConst = "I am a const";
}

// This will throw an error bcoz let and const are block-scoped
//console.log(blockLet);   
//console.log(blockConst); 
//t3:Write an arrow function greet that takes a name and returns "Hello, !". Test it with your name.
const greet = (name) => `Hello, ${name}!`;
console.log(greet("sadhana")); 
//t4:Write an arrow function multiply that takes two numbers and returns their product. Log the result for 5 and 6.
const multiply = (a, b) => a * b;

console.log(multiply(5, 6)); 
//t5:Create an object person with keys name, age, and country. Destructure the object to extract name and country into variables and log them.
const person = {
  name: "sadhana",
  age: 26,
  country: "Nepal"
};

const { name, country } = person;

console.log(name);   
console.log(country);


//t6:Create an array [10, 20, 30, 40]. Destructure the first two elements into variables and log them.
const numbers = [10, 20, 30, 40];

const [first, second] = numbers;

console.log(first);  
console.log(second); 

//t7:Write a function sayHello with a parameter name that defaults to "Guest" if not provided. Log the output when called with and without an argument.
const sayHello = (name = "Guest") => `Hello ${name}`;

console.log(sayHello());     
console.log(sayHello("sadhana"));

//t8:Write a function sumAll using the rest operator (...numbers) that calculates the sum of any number of inputs. Test with 1, 2, 3, 4.
const sumAll = (...numbers) => {
  return numbers.reduce((total, n) => total + n, 0);
};

console.log(sumAll(1, 2, 3, 4)); 

//t9:Create two arrays [1, 2, 3] and [4, 5]. Merge them into a new array using the spread operator and log the result.
const arr1 =[1,2,3];
const arr2 =[4,5];


const mergedArray = [...arr1, ...arr2];

console.log(mergedArray); 

//t1o:Create two objects: {a: 1, b: 2} and {c: 3, d: 4}. Merge them using the spread operator. Then destructure the merged object to extract a and d and log them.
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObj = { ...obj1, ...obj2 };


const { a, d } = mergedObj;

console.log(a); 
console.log(d); 
