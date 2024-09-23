# Step 3. #

## Arithmetic Operators ##

The name might be a bit of a giveaway but, Arithmetic operators pretty perform arithmetic functions on numbers (both literals and variables).

Below you can see the addition operator (+) in action determining the sum of two numbers.

`let x = 10 + 5;`

`console.log (x);`

Result: `15`
_________

You can add as many numbers or variables together as you want or need to.

`let x = 10;`

`let y = x + 5 + 22 + 45 + 6548;`

`console.log(y);`

Result: `6630`
_______

You can get the result of a string expression using the eval() function, which takes a string expression argument like eval("10 * 20 + 8") and returns the result. If the argument is empty, it returns undefined.

---
## Multiplication ##

We use the * operator to multiply one number by the other.

Like this:

`let x = 10 * 5; `

`console.log(x);`

Result: `50`

10 * '5' or '10' * '5' will give the same result. But trying to multiply a number with string values that aren’t numbers, like 'sololearn' * 5 will return NaN (Not a Number).

---
## Division ##

We use the / operator to perform division operations.

Like this:

`let x = 100 / 5;`

`console.log(x);`

Result: `20`

Beware of situations where there could be a division by 0, things get messed up when we do impossible math!

---
## The Modulus ##

The Modulus (%) operator returns the division remainder (what’s left over).

Like this:

`let myVariable = 26 % 6;`

`console.log(myVariable)`

Result: `2`

In JavaScript, we can use the modulus operator on integers AND on floating point numbers.

---
## Increment & Decrement ##

### Increment ++ ###

The increment operator increases the numeric value of its operand by 1. When placed before the operand, it’ll return the incremented value. When placed after it, it’ll return the original value and then increments the operand.

### Decrement -- ###

The decrement operator decreases the numeric value of its operand by 1. When placed before the operand, it’ll return the decremented value. When placed after the operand, it’ll return the original value and then decrements the operand.

`let x = (100 + 50) * 3;`

---
## Assignment Operators ##

You can use multiple assignment operators in one line, such as x -= y += 9.


