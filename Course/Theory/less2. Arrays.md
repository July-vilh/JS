# Arrays in JavaScript
Arrays in JavaScript are used to store multiple values in a single variable. They can hold any type of data (numbers, strings, objects, etc.) and the items are ordered by index, which starts from 0.

## Example of an array:

``` javascript
let fruits = ["Apple", "Banana", "Cherry"];
```
### Indexes in Arrays
Index is the position of an element in the array. In the above array:
+ `fruits[0] is "Apple"`
+ `fruits[1] is "Banana"`
+ `fruits[2] is "Cherry"`

``` javascript
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);  // Output: Apple
console.log(fruits[1]);  // Output: Banana
```

## Functions for Arrays

### 1. `arr.push()` 

The `push()` method `adds` one or more elements `to the end of the array` and returns the new length of the array.

#### Example

``` javascript
let fruits = ["Apple", "Banana"];
fruits.push("Cherry");  // Adds "Cherry" at the end
console.log(fruits);    // Output: ["Apple", "Banana", "Cherry"]
```

### 2. `arr.pop()`

The `pop()` method `removes the last element` from the array and returns that element. The array length is reduced by 1.

``` javascript
let fruits = ["Apple", "Banana", "Cherry"];
let lastFruit = fruits.pop();  // Removes "Cherry"
console.log(fruits);           // Output: ["Apple", "Banana"]
console.log(lastFruit);        // Output: "Cherry"
```
