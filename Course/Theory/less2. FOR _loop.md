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

#### Step-by-Step Breakdown:
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
Result: `0, 2, 4, 6, 8, 10`

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

Result: `0, 2, 4, 6, 8, 10`

#### Step-by-Step Breakdown:
+ Initialization `(let i = 0)`: The loop starts by declaring and initializing the variable i to 0.
+ Condition `(i <= 10)`: The loop checks if i is less than or equal to 10. If true, the loop continues; if false, it stops.
+ Modulo Check `(i % 2 === 0)`: Inside the loop, the `if` statement checks if `i` is `even` by using the modulo operator `(%)`. If `i` divided by `2` has a remainder of 0, it means `i` is even.
+ Action `(console.log(i))`: If the `if` condition is `true` (i.e., `i` is `even`), the current value of `i` is printed to the console.
+ Increment `(i++)`: After each iteration, `i` is increased by `1`, and the loop continues.
+ Repeat: The loop repeats this process, printing only the `even` numbers from `0 to 10`, until `i` exceeds `10`.
+ The loop prints the even numbers from `0 to 10`: `0, 2, 4, 6, 8, 10`.

In this case, the if condition ensures that only even numbers (those that satisfy i % 2 === 0) are logged to the console, while odd numbers are skipped.

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
Result: `16`

### Explanation:

+ Array Declaration: An array `arr` is declared with three elements: 3, 5, and 8.
+ Sum Initialization: A variable `sum` is initialized to 0 to hold the cumulative total of the array's elements.
+ "For" Loop: The loop runs from 0 to the length of the array `(arr.length)`, which allows it to access each element.
+ Inside the loop, `sum = sum + arr[i] ` adds the current element `(arr[i]) ` to the cumulative `sum`.
+ Output: Finally, `console.log(sum)` prints the total sum to the console.

## Task 4: Calculate the Sum of Odd Numbers from 5 to 15

```javascript
let sum = 0; // Initialize a variable to hold the sum

// Iterate over the numbers from 5 to 15 using a for loop
for (let i = 5; i <= 15; i++) {
    // Check if the current number is odd
    if (i % 2 !== 0) {
        sum = sum + i; // Add the odd number to the sum
    }
}

console.log(sum); // Output the total sum to the console
```
Result: `60`

### Explanation:

+ Sum Initialization: A variable `sum` is initialized to 0 to hold the cumulative total of odd numbers.
+ "For" Loop: The loop iterates from `5 to 15` (inclusive).
+ Inside the loop, the condition `if (i % 2 !== 0)` checks if the current number `i` is `odd (not divisible by 2)`.
+ If the `number` is `odd`, `sum = sum + i` adds it to the cumulative sum.
+ Output: Finally, `console.log(sum)` prints the total sum of odd numbers to the console

