// Example: Doubling each number in an array
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Example: Filtering even numbers from an array
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Example: Summing all numbers in an array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// Example: Logging each element of an array
numbers.forEach(num => {
    console.log(num);
});
// Output:
// 1
// 2
// 3
// 4
// 5

// Example: Sorting an array of numbers
numbers.sort((a, b) => a - b); // Sort in ascending order
console.log(numbers); // Output: [1, 1, 3, 4, 5, 9]
