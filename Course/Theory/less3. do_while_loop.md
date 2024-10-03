In JavaScript, the `do...while` loop is similar to a while loop, but the key difference is that it executes the code block at least once before checking the condition. 

The condition is evaluated after the loop body has executed.

## Syntax:
```javascript
do {
    // Code to execute
} while (condition);
```

## How it works:
+ The code inside the `do` block runs once.
+ Then the condition inside the while is evaluated. // "Затем вычисляется условие внутри while"
+ If the condition is `true`, the loop `repeats`.
+ If the condition is `false`, the loop `stops`.

_____

## Example 1: Basic `do...while` loop
```javascript
let i = 0;

do {
    console.log(i);  // This will print 0, 1, 2
    i++;
} while (i < 3);
```
`Result: "0, 1, 2" // The loop runs as long as i is less than 3.`

## Example 2: Guaranteed execution
``` javascript
let i = 5;

do {
    console.log(i);  // Prints 5 even though the condition is false initially
    i++;
} while (i < 3);
```
`Result: "5"`
` Here, the loop runs once even though the condition i < 3 is false, because the condition is checked after the first iteration.`
______
## TASK1: "Calculate the sum of the array elements through the do while loop"
```javascript
let array = [1, 2, 3, 5];
let sum = 0
let i = 0

do {sum = sum + array [i];
    i++;
}
while (i < array.length)

console.log(sum)
```
`Result: "11"`
