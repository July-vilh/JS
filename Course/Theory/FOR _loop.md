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
for (let i=0; i<=10; i++) {
console.log(i);
}
```

## check only even (четные) numbers

### option1:
```javascript
for (let i=0; i<=10; i+=2) {
console.log(i);
}
```

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

