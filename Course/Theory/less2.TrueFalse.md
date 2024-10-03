In JavaScript, `true` and `false` are boolean values used to represent truthy and falsy states.

## Examples of usage in JavaScript:
Logical expressions:
```javascript
console.log(5 > 3);  // true
console.log(2 == 5); // false
```

## In conditional statements:
### Example1:
```javascript
let isSunny = true;
if(!isSunny){
console.log("Take sunglases"}
}
```
### Example2:
```javascript
if (true) {
    console.log("This will always run.");  // Runs because true is always true
}

if (false) {
    console.log("This will never run.");  // Doesn't run because false is always false
}
```

## Using in functions:
```javascript
function isPositive(number) {
    return number > 0;  // Returns true if number is positive, false otherwise
}

console.log(isPositive(5));  // true
console.log(isPositive(-3)); // false
```


