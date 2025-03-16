1;
/*
 Objective:
 Write a function that extracts specific properties from an object
 and returns a new object containing only those properties with their corresponding values.
*/
const user = {
  name: "a",
  age: 2,
  channel: "new",
};

function specificProperties(user) {}

console.log(getObjValues(user, ["name", "age"])); // { name: 'a', age: 2 }

2;
/**
 * Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:
Пример:

Обходишь объект, проверяешь все ключи.
Если ключ — строка, увеличиваешь счетчик.
Если ключ — массив или объект, проверяешь каждый элемент внутри. 
*/

const obj = {
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, "3", 4],
  fifth: "null",
  tr: {
    dream: "32",
  },
}; //returns 6

function letCount(obj) {
  const ArrayOfValues = Object.values(obj).filter(
    (el) => typeof el === "string"
  );
  let count = 0;
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      count += 1;
    } else if (Array.isArray(obj[key])) {
      // Если значение — массив, перебираем элементы
      for (const item of obj[key]) {
        if (typeof item === "string") {
          count += 1;
        }
      }
    } else if (typeof obj[key] === "object") {
      // Если значение — объект, перебираем его ключи
      for (const nestedKey in obj[key]) {
        if (typeof obj[key][nestedKey] === "string") {
          count += 1;
        }
      }
    }
  }
  return ArrayOfValues;
}
console.log(letCount(obj));

3;
/*
 * The function giveMeFive accepts 1 parameter, obj, which is an object.
 * Create an array (which you will eventually return).
 * Then, traverse obj, checking each key and value.
 * If the length of the key is equal to 5, then push the key to your array.
 * Separately, if the length of the value is equal to 5, then push the value to your array.
 * At the end, return your array.
 */

function giveMeFive(obj2) {
  const array = [];
  Object.entries(obj2).forEach(([key, value]) => {
    if (key.length === 5) array.push(key);
    if (value.length === 5) array.push(value);
  });
  return array;
}

console.log(giveMeFive({ Our: "earth", is: "a", beautyful: "world" })); // ["earth","world"]
console.log(
  giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" })
); // ["Ihave","money","model"]
console.log(giveMeFive({ Pears: "than", apple: "sweet" })); //["Pears","apple","sweet"])
