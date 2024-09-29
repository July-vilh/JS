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

## Random and arrays

To select random numbers from an array or generate random numbers, you can use `Math.random()` and `Math.floor()` together. Here's a breakdown:

### 1. `Math.random()`

`Math.random()` generates a random `decimal number between 0 (inclusive) and 1 (exclusive)`. So, it will return something like 0.1234 or 0.9876.

``` javascript
console.log(Math.random());  // Output: a number between 0 and 1, like 0.5432
```

### 2. `Math.random() * N`

To get a random number `between 0 and a specific number N (like 9)`, you can multiply `Math.random() by N`.

``` javascript
console.log(Math.random() * 9);  // Output: a decimal between 0 and 9, like 4.567
```
### 3. `Math.floor()`

`Math.floor()` is used to round down a decimal number to the nearest whole number. // `Math.floor()` используется для округления десятичного числа в меньшую сторону до ближайшего целого числа.

``` javascript
console.log(Math.floor(4.567));  // Output: 4
```

### 4. Combining them

To get a random whole number between 0 and 9, you can use:

``` javascript
let randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);  // Output: a random whole number between 0 and 9
```

### 5. Picking a `Random Element from an Array`

To pick a random element from an `array`, you can use the same concept by multiplying by the `array's length`.

``` javascript
let fruits = ["Apple", "Banana", "Cherry", "Orange"];
let randomIndex = Math.floor(Math.random() * fruits.length);
console.log(fruits[randomIndex]);  // Output: a random fruit like "Banana"
```

## Summary:
+ `Math.random()` gives a random `decimal between 0 and 1`.
+ Multiply by a number to get a random value in a different range.
+ Use `Math.floor()` to get a `whole number.`
