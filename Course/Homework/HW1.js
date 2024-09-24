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
