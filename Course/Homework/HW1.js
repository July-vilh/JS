// 2. Написать функцию, которая принимает 2 строки ** 2. Write a function that takes 2 strings. **
// В самой функции мы должны сделать сложение 2 строк (строки должны быть в виде чисел) ** Inside the function, we should add the two strings (the strings should represent numbers)** 
// и посчитать их сумму использую конвертацию в число ** calculate their sum by converting them to numbers. **

function sum(a, b){
    let aa = parseInt(a);
    let bb = parseInt(b);
    console.log(aa+bb)
}

sum("3", "4")

//Result: 7 (as expected)

____________

// 3. Написать функцию, которая принимает 3 строки ** 3. Write a function that takes 3 strings **
//В самой функции посчитать произведение 3 строк с учетом того, что их нужно конвертировать в число **  Inside the function, calculate the product of the 3 strings, 
//making sure to convert them to numbers **
//Важно: строка может иметь значение с плаваюшей точкой (parseFloat) ** Important: the string can contain a floating-point value (use parseFloat) **

function multiply (a, b, c){
    aa = parseFloat(a);
    bb = parseInt(b);
    cc = parseInt(c);
    console.log(aa * bb * cc)
}
multiply("3.14", "10", "5")

// Result: 157 (as expected)
