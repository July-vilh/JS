# Step 4 #

## Comparison Operators ##

You get either true or false.

You can compare all types of data with comparison operators, they’ll always return true or false.

Comparison Operators

One important thing to remember when we use operators, is that they only work when they’re comparing the same data type; numbers with numbers, strings with strings, you get the idea.

+ `=` means assignment (`let x = 5;`)

+ `==` the equal to (==) operator checks whether the operands' values are equal.

`let num = 10;`

`console.log (num == 8);` //outputs false

+ `===` a strict comparison because it compares not only the value but also the type

`let a = 5`

`let b = "5"`

`console.log (a === b)` // otputs = False, because a = integer (type); b = string (type)

---
## Logical Operators ##

Logical Operators, also known as Boolean Operators, evaluate an expression and return true or false.

Check out the table below to see more details on the logical operators (AND, OR, NOT).

Logical Operators

The AND (`&&`) operator.

`(4 > 2) && (10 < 15)`

For this expression to be true, both conditions need to be true.

+ The first condition determines whether 4 is greater than 2, which is true.

+ The second condition determines whether 10 is less than 15, which is also true.

---
## Conditional (Ternary) Operator ##

Conditional, or Ternary, operators assign a value to a variable, based on some condition.

This is what the syntax would look like:

`variable = (condition) ? value1: value2`

And here’s an example:

`let isAdult = (age < 18) ? "Too young": "Old enough";` 

If the variable age is a value below 18, the value of the variable isAdult will be "Too young". Otherwise the value of isAdult will be "Old enough".

With logical operators you can connect as many expressions as you want or need to.

---
## String Operators ##

We can use concatenation (represented by the + sign) to build strings made up of multiple smaller strings, or by joining strings with other types. Check it out:

`let mystring1 = "I am learning ";`

`let mystring2 = "JavaScript with SoloLearn.";`

`console.log (mystring1 + mystring2);`

Result: `I am learning JavaScript with SoloLearn.`

This example declares and initializes two string variables, and then concatenates them. 

Numbers in quotes are treated as strings: So "42" is not the number 42, it’s a string that includes the two separate characters, 4 and 2.
