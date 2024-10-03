
In JavaScript, the `continue` statement is used within loops (for, while, do...while) to skip the rest of the current iteration and move to the next one.

## Example 1: Using `continue` in a `for` loop

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;  // Skips the iteration when i is 3
    }
    console.log(i);  // Output: 1, 2, 4, 5 (3 is skipped)
}
```
