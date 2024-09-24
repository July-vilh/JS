# Step 5 #

## The `"if"` Statement ##

There are a bunch of different conditionals, to cover, but we’re starting with one of the most useful: "if". We use if to specify a block of code that we want to be executed if a specified condition is true.

`if (condition) {` 
`statements`
`}`

The statements will only be executed if the specified condition is true. Let’s take a look at an example:

`let myNum1 = 7;` 
`let myNum2 = 10;`

`if (myNum1 < myNum2) {` 
`alert("JavaScript is easy to learn.");` 
`}`

You can see from the example above, we’ve used the JavaScript alert() to generate a popup alert box that contains the information inside the parentheses.

`let myNum1 = 7;` 
`let myNum2 = 10;` 

`if (myNum1 > myNum2) {` 
`alert("JavaScript is easy to learn.");` 

Because the condition evaluates to false, the alert statement gets skipped and the program continues with the line after the if statement's closing curly brace.

if is in lowercase letters. Uppercase letters (If or IF) won’t work.

---
## The `"else"` Statement ##

We can use the else statement to specify a block of code that will execute if the condition is false. Like this:

`if (expression) { `
`// executed if condition is true `
`} `
`else { `
`//executed if condition is false `
`}`

Here’s another example of the if and else statements working together:

`let myNum1 = 7;` 
`let myNum2 = 10;` 

`if (myNum1 > myNum2) { `
`alert("This is my first condition"); `
`} `
`else {` 
`alert("This is my second condition");` 
`}`

Let's translate that example. It says:

+ If myNum1 is greater than myNum2, alert "This is my first condition";

+ Else, alert "This is my second condition".

So the browser will print out the second condition, as 7 is not greater than 10.

There's another way to do this check using the ? operator: `a > b ? alert(a) : alert(b)`.

+ if none of the above condition is true, then output "JavaScript Tutorial";

The final else statement "ends" the else if statement and should be always written after the if and else if statements.

