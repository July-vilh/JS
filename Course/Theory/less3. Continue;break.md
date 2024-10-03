
In JavaScript, the `continue` statement is used within loops `(for, while, do...while)` to skip the rest of the current iteration and move to the next one.

## Example 1: Using `continue` in a `for` loop

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;  // Skips the iteration when i is 3
    }
    console.log(i);  // Output: 0, 1, 2, 4 (3 is skipped)
}
```
` Result: "0, 1, 2, 4 (3 is skipped)"`

## Example 2: Using `continue` in a `while` loop
```javascript
let i = 0;
while (i < 5) {
    i++;
    if (i === 3) {
        continue;  // Skips the iteration when i is 3
    }
    console.log(i);  // Output: 1, 2, 4, 5
}
```
`Result: "1, 2, 4, 5 (3 is skipped)"`

## How it works:
+ When `continue` is encountered, the `current` iteration of the loop is `stopped`, and the loop moves to the next iteration.
+ It's useful when you want to `skip over certain values or conditions without breaking the entire loop`.

______
______
______

In JavaScript, the `break` statement is used to immediately exit a loop `(for, while, do...while)` or a switch statement, stopping further execution of the loop or block.

## Example 1: Using `break` in a `for` loop
```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;  // Exits the loop when i is 3
    }
    console.log(i);  // Output: 1, 2 (loop stops when i is 3 and don't continue anymore)
}
```
`Result: " 1, 2 (loop stops when i is 3 and don't continue anymore)"`

## Example 2: Using `break` in a `while` loop
```javascript
let i = 0;
while (i < 5) {
    i++;
    if (i === 3) {
        break;  // Exits the loop when i is 3
    }
    console.log(i);  // Output: 1, 2 (loop stops when i is 3)
}
```
`Result: "1, 2 (loop stops when i is 3)"`

## How it works:
+ When `break` is encountered, it immediately stops the execution of the current loop or switch block and jumps to the code following the loop/block.
+ It's useful for exiting loops early based on a condition or stopping further case evaluations in a switch statement.
