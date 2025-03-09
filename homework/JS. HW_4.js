//1. Напиши функцию, которая принимает два числа и возвращает их сумму.

"use strict";
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3));

// 2. Напиши функцию, которая принимает имя и возвращает строку вида "Привет, <имя>!".

function greet(name) {
  return `Привет, ${name}!`;
}

console.log(greet("Анна"));

// 3. Напиши функцию, которая принимает число и возвращает его квадрат.
function square(n) {
  return n ** 2;
}

console.log(square(4));

// 4. Напиши функцию, которая принимает число и возвращает true, если оно четное, и false, если нечетное.

function isEven(n) {
  return n % 2 === 0 ? true : false;
}

console.log(isEven(4));
console.log(isEven(7));

// 5. Напиши функцию, которая принимает два числа: число и степень, и возвращает результат возведения числа в степень.
function power(num, exp) {
  return num ** exp;
}

console.log(power(2, 3)); // 8

// 6. Напиши функцию, которая принимает массив чисел и возвращает наибольшее число.
("use strict");
function maxNumber(arr) {
  return Math.max(...arr);
}

console.log(maxNumber([3, 7, 1, 9, 12])); // 12

// 7. Напиши функцию, которая принимает число n и возвращает его факториал (n!).
function factorial(n) {
  let pow = 1;
  for (let i = n; i > 1; i--) {
    pow *= i;
  }
  return pow;
}

console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)

// 8. сложение чисел от 1 до n
function sum(n) {
  let summa = 0;
  for (let i = n; i > 1; i--) {
    summa += i;
  }
  return summa;
}
console.log(sum(5));

// 9. Напиши функцию, которая принимает строку и возвращает её в обратном порядке.
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"

// 10. Напиши функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные элементы.
function uniqueValues(arr) {
  const unique = [...new Set(arr)];
  return unique;
}

console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
