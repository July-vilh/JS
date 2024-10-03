In JavaScript, `objects` are collections of properties, where each property consists of a `key` (also called a `property name`) and a value. Objects are used to store data in the form of `key-value pairs`, making them versatile for representing structured data.

## Syntax:
```javacript
let object = {
    key1: value1,
    key2: value2,
    key3: value3
};
```
____

## Example 1: Basic object
```javacript
let person = {
    name: "Alice",
    age: 25,
    isStudent: false
};

console.log(person.name);  // "Alice"
console.log(person.age);   // 25
console.log(person.isStudent);  // false
```
+ `Keys`: name, age, isStudent
+ `Values`: "Alice", 25, false

## Example 2: `Adding` and `modifying` properties
```javacript
let car = {
    brand: "Toyota",
    model: "Corolla"
};

// Adding a new property
car.year = 2020;
console.log(car.year);  // 2020

// Modifying an existing property
car.model = "Camry";
console.log(car.model);  // "Camry"
console.log(car)
```
`Result: "2020"; "Camry"; "{ brand: 'Toyota', model: 'Camry', year: 2020 }"`
