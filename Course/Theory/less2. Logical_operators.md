## JavaScript Logical Operators: `&&` (AND) and `||` (OR)

### 1. `&&` (Logical `AND`):

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

Result: `Both variables = true` (Both conditions (x > 7 and y > 10) are true, so the result is true.)

### 2. `||` (Logical `OR`):

+ The `||` operator returns `true` if at least one condition is true. It only returns `false` if both conditions are false.
+ It evaluates from left to right and stops as soon as it finds a true value (short-circuiting).

```javascript
let x = 8;
let y = 11;

if (x > 7 || y > 20) {
  console.log("at least one condition is true");
} else {
  console.log ("all conditions = false") 
}
```
Result: `at least one condition is true` (`x || y` is true because `x` is true. Only `one` value needs to be `true` for the result to be `true`.)

### Task 1

Create a program that determines the season based on the month and temperature. Conditions:

- If the `month` is `"December", "January", or "February"` and the `temperature` is `below 0`, output `"Winter"`.
- If the `month` is `"March", "April", or "May"` and the `temperature` is `between 10 and 20`, output `"Spring"`.
- If the `month` is `"June", "July", or "August"` and the `temperature` is `above 20`, output `"Summer"`.
- If the `month` is `"September", "October", or "November"` and the `temperature is below 20`, output `"Autumn"`.
- If the month or temperature is not specified, output `"No information"`.

```javascript
function seasons(month, temperature) {
    if ((month === "December" || month === "January" || month === "February") && temperature < 0) {
        console.log("Winter");
    } else if ((month === "March" || month === "April" || month === "May") && temperature > 10 && temperature < 20) {
        console.log("Spring");
    } else if ((month === "June" || month === "July" || month === "August") && temperature > 20) {
        console.log("Summer");
    } else if ((month === "September" || month === "October" || month === "November") && temperature < 20) {
        console.log("Autumn");
    } else {
        console.log("No information");
    }
}

seasons("December", -2);
```

Result: `Winter` (as expected)

#### Explanation:

+ This function checks the given `month` and `temperature` to determine the season.
+ It uses multiple `if-else` statements to check the `month` and `temperature` conditions and then prints the corresponding season or a message if no valid values is provided.
