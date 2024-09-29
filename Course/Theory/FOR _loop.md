Loops can execute a block of code a number of times. They’re handy when you want to run the same code repeatedly, adding a different value each time.

Циклы могут выполнять блок кода несколько раз. Они удобны, когда вы хотите многократно запускать один и тот же код, каждый раз добавляя новое значение.

```javascript
for (statement 1; statement 2; statement 3) {
code block to be executed
}
```

And here’s what happens when it runs:

+ Statement 1 is executed before the loop (the code block) starts. // Оператор 1 выполняется перед запуском цикла (блока кода).

+ Statement 2 defines the condition for running the loop (the code block). // Оператор 2 определяет условие для выполнения цикла (блока кода).

+ Statement 3 is executed each time after the loop (the code block) has been executed. // Оператор 3 выполняется каждый раз после выполнения цикла (блока кода).

## For example

```javascript
// Start a "for" loop, with 'i' initialized to 0.
// The loop will continue running as long as 'i' is less than or equal to 10.
// After each iteration, 'i' is incremented by 1.

for (let i = 0; i <= 10; i++) {
  
    // On each iteration, the current value of 'i' is printed to the console.

    console.log(i);

    // After printing the value, 'i' is incremented by 1, and the loop continues
    // until 'i' exceeds 10.
}
```

### Step-by-Step Breakdown:
+ Initialization `(let i = 0)`: The loop starts by declaring and initializing the variable i to 0.
+ Condition `(i <= 10)`: The loop checks if `i` is less than or equal to 10. If true, the loop continues; otherwise, it stops.
+ Action `(console.log(i))`: If the condition is met, the current value of `i` is printed to the console.
+ Increment `(i++)`: After executing the code inside the loop, `i` is incremented by 1.
+ Repeat: The loop repeats this process, printing the new value of `i` and incrementing it, until `i` becomes greater than 10, at which point the loop stops.

## check only even (четные) numbers

### option1:
```javascript
// Start a for loop, with 'i' initialized to 0.
// The loop will continue running as long as 'i' is less than or equal to 10.
// After each iteration, 'i' is incremented by 2.

for (let i = 0; i <= 10; i += 2) {

    // On each iteration, the current value of 'i' is printed to the console.

    console.log(i);

    // After printing the value, 'i' is incremented by 2, and the loop continues
    // until 'i' exceeds 10.
}
```
#### Step-by-Step Breakdown:
+ Initialization `(let i = 0)`: The loop starts by declaring and initializing the variable i to 0.
+ Condition `(i <= 10)`: The loop checks if i is less than or equal to 10. If true, the loop continues; if false, it stops.
+ Action `(console.log(i))`: If the condition is met, the current value of i is printed to the console.
+ Increment `(i += 2)`: After executing the code inside the loop, i is increased by 2, not by 1.
+ Repeat: The loop repeats this process, printing the value of `i` and adding `2` to it each time, until `i` becomes greater than `10`, at which point the loop stops.
+ This results in the even numbers between 0 and 10 being printed to the console: `0, 2, 4, 6, 8, 10`. The key difference is the increment of i by 2 instead of 1, which skips over odd numbers.

### option2:
```javascript
for (let i=0; i<=10; i++) {
    if(i%2 === 0) {
        console.log(i);
}
```

Result: 


## Task 3: Calculate the Sum of Array Elements Using a For Loop

```javascript
let arr = [3, 5, 8]; // Declare an array with elements 3, 5, and 8
let sum = 0; // Initialize a variable to hold the sum

// Iterate over each element in the array using a for loop
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]; // Add the current element to the sum
}

console.log(sum); // Output the total sum to the console
```
Result:

### Explanation:

+ Array Declaration: An array `arr` is declared with three elements: 3, 5, and 8.
+ Sum Initialization: A variable `sum` is initialized to 0 to hold the cumulative total of the array's elements.
+ "For" Loop: The loop runs from 0 to the length of the array `(arr.length)`, which allows it to access each element.
+ Inside the loop, `sum = sum + arr[i] ` adds the current element `(arr[i]) ` to the cumulative `sum`.
+ Output: Finally, `console.log(sum)` prints the total sum to the console.

