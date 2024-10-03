
In JavaScript, the `continue` statement is used within loops (for, while, do...while) to skip the rest of the current iteration and move to the next one.

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



