# Step 2 #

## Variables ##
Variables are containers for storing data values. The value of a variable can change throughout the program.

Declaring a variable is as simple as using the keyword var. Which would look like this:
`let x = 10;`

Which means that in JavaScript, x = y will assign the value of y to x variable.

JavaScript is sensitive, case sensitive that is. So variables like lastName and lastname are not the same.

```javascript
let x = 100;
console.log(X);
```

## Naming Variables ##

```javascript
let x = 100;
console.log(X);
```

Rules:

+ The first character of a variable name must be a letter, underscore (_), or a dollar sign ($) (Subsequent characters can be letters, digits, underscores, or dollar signs).

+ The first character of a variable name can’t be a number.

+ Variable names can’t include a mathematical or logical operator in their name. For instance, 2*something or this+that;

+ Variable names can’t contain spaces.

+ You’re not allowed to use any special symbols, like my#num, num%, etc.

JavaScript is a hyphen free zone. They’re reserved for subtractions.

## Comments in JavaScript ##

But! Not all JavaScript statements are "executed".

Any code after a double slash //, or between /* and */, is treated as a comment, and will be ignored, and not executed.

To write a Single line comment we use double slashes. Like this:

// This is a single line comment

alert ("This is an alert box!"); 

If we want to create a multi-line comment, we write it between /*and */

Like this:

`/* This code 
creates an 
alert box */`

```javascript
alert("This is an alert box!");
```

---
## Data Types ##

The term data type refers to the types of values a program can work with. The sky's the limit with JavaScript variables, which can hold a bunch of different data types–numbers, strings, arrays, you name it.

Let's start simple though. Numbers can be written with or without decimals. Like this:
```javascript
let num = 42; // A number without decimals
let price = 55.55; // A number with decimals
```

Changing this variable is a breeze, just assign to it any other data type value, like `num = 'some random string'`.

---
## Strings ##

In JavaScript we can use strings to store and manipulate text. A string can be any text wrapped in quotes. Single or double quotes, it doesn’t matter, so long as you’re consistent with them. Like this:

```javascript
let name = 'John';
let text = "My name is John Smith";
```

You can use quotes inside a string, as long as they don't match the quotes enclosing the string itself. 

Take a look:

```javascript
let text = "My name is 'John' ";
```

You can get double quotes inside of double quotes using the escape character like this: \" or \' inside of single quotes.

Strings

Now is a good time to talk about the backslash (\) escape character. It comes to the rescue when you need to put quotes within strings (and a bunch of other situations) by transforming special characters into string characters.

Take a look:
```javascript
let sayHello = 'Hello world! \'I am a JavaScript programmer.\' ';
console.log(sayHello);
```

If you start a string with a single quote, then you need to end it with a single quote too. This applies to double quotes. Otherwise, JavaScript will get confused. Poor JavaScript.

---
## Booleans ##

Booleans in JavaScript serve a useful function by letting you have one of two values, either true or false.

So when you need a data type that can only have one of two possible values, like Yes/No, on/off or true/false, look no further than Mr Boolean. Let’s look at an example:
```javascript
let isActive = true;
let isHoliday = false;
```

The Boolean value of 0 (zero), null, undefined, empty string is false.

Everything with a "real" value is true.

