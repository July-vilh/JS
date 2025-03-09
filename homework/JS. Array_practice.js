//TODO: Task 1

/**
 * У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
  Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  
  const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];
 */

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
/*
Дан массив цифр. Необходимо вернуть то число, которое встречается в массиве нечетное количество раз

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

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
/*
Напишите функцию, которая принимает на вход массив целых чисел 
и возвращает отсортированный массив по следующему критерию: 
 - количество цифр в числе.
 */
const arr = [123, 4565565, 1, 241234124124, 12, 5656, 12];
function SortArray(arr) {
  const array = [...arr];
  return array.sort((a, b) => {
    const NumberOfDigitsInA = String(a).length;
    const NumberOfDigitsInB = String(b).length;
    return NumberOfDigitsInA - NumberOfDigitsInB;
  });
}

// variant2:
return array.sort((a, b) => String(a).length - String(b).length);
console.log(SortArray(arr));

//TODO: Task 4

/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.
*/

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  const ArrWithoutZero = arr.filter((el) => el !== 0);
  const ArrWithZero = arr.filter((el) => el === 0);
  const result = [...ArrWithoutZero, ...ArrWithZero];
  return result;
}

//TODO: Task 5
/*
Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
где в каждом числе переставлены цифры так, 
чтобы число получилось максимально возможным, например: 1234 => 4321
*/
