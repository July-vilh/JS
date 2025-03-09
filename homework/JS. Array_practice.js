//TODO: Task 1
/* У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
  Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  
  const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123]; */

const prices = [
  64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421,
  9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123,
];

function getPricesData(prices = []) {
  const totalPrice = prices.reduce((total, price) => total + price, 0);
  const avgPrice = totalPrice / prices.length;
  return `Итого: ${totalPrice} $, средняя цена товара ${avgPrice} $`;
}

console.log(getPricesData(prices));

//TODO: Task 2
/* Дан массив цифр. Необходимо вернуть то число, которое встречается в массиве нечетное количество раз

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). */

// variant1
function getOdd(arr = []) {
  return arr.find((num, index, array) => {
    const arrayOfNums = array.filter((el) => el === num);
    const length = arrayOfNums.length;
    return length % 2;
  });
}

// variant2
return arr.find(
  (num, index, array) => array.filter((el) => el === num).length % 2
);

console.log(getOdd([7]));
console.log(getOdd([0]));
console.log(getOdd([1, 1, 2]));
console.log(getOdd([0, 1, 0, 1, 0]));
console.log(getOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

//TODO: Task 3
/* Напишите функцию, которая принимает на вход массив целых чисел 
и возвращает отсортированный массив по следующему критерию: 
 - количество цифр в числе. */
const arr1 = [123, 4565565, 1, 241234124124, 12, 5656, 12];
function SortArray(arr1) {
  const array = [...arr1];
  return array.sort((a, b) => {
    const NumberOfDigitsInA = String(a).length;
    const NumberOfDigitsInB = String(b).length;
    return NumberOfDigitsInA - NumberOfDigitsInB;
  });
}

// variant2:
return array.sort((a, b) => String(a).length - String(b).length);
console.log(SortArray(arr1));

//TODO: Task 4
/* Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.*/

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  const ArrWithoutZero = arr.filter((el) => el !== 0);
  const ArrWithZero = arr.filter((el) => el === 0);
  const result = [...ArrWithoutZero, ...ArrWithZero];
  return result;
}

//TODO: Task 5
/* Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
где в каждом числе переставлены цифры так, 
чтобы число получилось максимально возможным, например: 1234 => 4321 */

const arr2 = [123, 542, 968, 352, 1, 308];
console.log(getGreatestTransformedNumbers(arr2));

function getGreatestTransformedNumbers(arr2) {
  return arr2.map((num) => {
    const ArrayOfNums = String(num).split(""); // [123] теперь ['1', '2', '3']
    const SortedArrayOfNums = ArrayOfNums.sort((a, b) => +b - +a); //cортирует в порядке убывания: ['3', '2', '1']
    const NewNum = +SortedArrayOfNums.join(""); // `321` -> 321
    return NewNum;
  });
}

// variant2
return arr2.map((num) => +[...num.toString()].sort((a, b) => +b - +a).join(""));

//TODO: 6
/* Напиши функцию allPositive, которая проверяет, являются ли все элементы массива положительными числами. 
Возвращает true или false. */

function allPositive(arr = [], isPositive = true) {
  return arr.every((el) => (isPositive ? el >= 0 : el < 0));
}

console.log(allPositive([3, 5, 2, 8], true)); // true
console.log(allPositive([3, -1, 2, 8], true)); // false
console.log(allPositive([-3, -1, -2, -8], false)); // true
console.log(allPositive([-3, 1, -2, -8], false)); // false

//TODO: Task 7
/* Напиши функцию findMax, которая принимает массив чисел и возвращает наибольшее число.
Решить без Math.max с помощью reduce */

function findMax(arr) {
  return arr.reduce((result, element) => {
    if (element > result) {
      result = element;
    }
    return result;
  }, arr[0]);
}

console.log(findMax([3, 1, 7, 9, 5])); // 9
console.log(findMax([-10, -3, -5, -1])); // -1

//TODO: Task 8
/* Напиши функцию findFirstGreaterThanTen, которая принимает массив чисел 
и возвращает индекс первого элемента, который больше 10. 
Если такого элемента нет, вернуть -1. */

function findFirstGreaterThanTen(arr) {
  return arr.findIndex((num) => num > 10);
}

console.log(findFirstGreaterThanTen([1, 4, 10, 15, 20])); // 3
console.log(findFirstGreaterThanTen([1, 2, 3])); // -1

//TODO: Task 9
/* Напиши функцию sumAboveAverage, которая принимает массив чисел и возвращает сумму всех элементов, 
которые больше среднего арифметического. */

function sumAboveAverage(arr = []) {
  const avg = arr.reduce((result, element) => result + element, 0) / arr.length; //среднее всех элементов
  const aboveAvg = arr.filter((el) => el > avg); //отфильтровали элементы что больше среднего
  return aboveAvg.reduce((result, element) => result + element, 0); //сумма всех элементов что больше среднего (avg)
}

console.log(sumAboveAverage([1, 2, 3, 4, 5])); // 9 (4 + 5)
console.log(sumAboveAverage([10, 20, 30])); // 30 (30)

//TODO: Task 10
//Напиши функцию topNElements, которая принимает массив чисел и число n, и возвращает n наибольших элементов.

function topNElements(arr, n) {
  return [...arr].sort((a, b) => b - a).slice(0, n);
}

console.log(topNElements([10, 5, 8, 3, 12, 15], 3)); // [15, 12, 10]
console.log(topNElements([1, 2, 3, 4, 5], 2)); // [5, 4]

//TODO: Task 11
/* Напиши функцию productExceptSelf, которая принимает массив чисел и возвращает массив, 
где каждый элемент равен произведению всех остальных элементов массива (без учёта текущего элемента).*/

function productExceptSelf(arr) {
  return arr.map((_, index, array) => {
    return array.reduce((result, element, i) => {
      if (index !== i) {
        return result * element;
      }
      return result;
    }, 1);
  });
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([5, 3, 4, 2])); // [24, 40, 30, 60]

// variant2
return arr.map((number, i, array) =>
  array.reduce((total, value) => (number === value ? total : total * value), 1)
);

//TODO: Task 12
/* Introduction
The first century spans from the year 1 up to and including the year 100, 
the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.*/

function getCentury(year) {
  if (year < 101) {
    return 1;
  }

  const devidedBy100 = year / 100;
  return Number.isInteger(devidedBy100) ? devidedBy100 : parseInt(devidedBy100) + 1;
}

console.log(getCentury(1601)); //17
console.log(getCentury(1600)); //16
console.log(getCentury(200)); //2
console.log(getCentury(199)); //2
console.log(getCentury(201)); //3
