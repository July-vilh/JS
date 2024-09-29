## JavaScript Logical Operators: `&&` (AND) and `||` (OR)

### && (Logical AND):

+ The `&&` operator returns `true` if `both` conditions are `true`. If any condition is `false`, it returns `false`.
+ It evaluates from left to right and stops as soon as it finds a false value (short-circuiting).

```javascript
let x = 8;
let y = 11;

if (x > 7 && y > 10) {
  console.log("Both variables = true");
} else {
  console.log ("No") 
}
```

Result: Both variables = true (Both conditions (x > 7 and y > 10) are true, so the result is true.)

### 2. || (Logical OR):

The || operator returns true if at least one condition is true. It only returns false if both conditions are false.
It evaluates from left to right and stops as soon as it finds a true value (short-circuiting).
