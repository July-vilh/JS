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
