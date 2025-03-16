//TODO: 1
// Objective: Count the occurrences of a specific property value in an array of objects.
const orders = [
  { orderId: 1, status: "shipped" },
  { orderId: 2, status: "pending" },
  { orderId: 3, status: "shipped" },
  { orderId: 4, status: "delivered" },
];

function countStatusOccurrences(value) {
  const filtered = orders.filter((el) => el.status === value); // filter создаёт новый массив с объектами, у которых status совпадает с переданным значением (value)
  return filtered.length; // .length считает количество элементов в этом новом массиве.
}

const shippedCount = countStatusOccurrences("shipped");
console.log("Shipped Orders Count:", shippedCount); //Shipped Orders Count: 2

//TODO: 2
// Objective: Search for an object within an array of objects.

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
];

const found = findProductById(2);
console.log("Found Product:", found); //{ id: 2, name: "Phone", price: 500 },
function findProductById(id) {
  const result = products.find((el) => el.id === id);
  if (!result) throw new Error ('error');
  return result;
}
