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
  if (!result) throw new Error("error");
  return result;
}

//TODO: Task 3
const libraries = [
  {
    id: 1,
    name: "Central Library",
    sections: [
      {
        id: 2,
        name: "Science Fiction",
        books_count: 30,
      },
      {
        id: 3,
        name: "Mystery",
        books_count: 25,
      },
      {
        id: 4,
        name: "Non-Fiction",
        books_count: 40,
      },
    ],
  },
  {
    id: 5,
    name: "Community Library",
    sections: [
      {
        id: 6,
        name: "Children's Books",
        books_count: 15,
      },
      {
        id: 7,
        name: "Romance",
        books_count: 20,
      },
      {
        id: 8,
        name: "History",
        books_count: 10,
      },
    ],
  },
  {
    id: 9,
    name: "University Library",
    sections: [
      {
        id: 10,
        name: "Textbooks",
        books_count: 100,
      },
    ],
  },
];

/*
1. Display all libraries and their sections, 
including the number of books in each section and the total number of books in each library.

Central Library (95 books)
- Science Fiction (30 books)
- Mystery (25 books)
- Non-Fiction (40 books)

Community Library (45 books)
- Children's Books (15 books)
- Romance (20 books)
- History (10 books)

University Library (100 books)
- Textbooks (100 books)
*/

function showLibraries() {
  libraries.forEach((library) => {const booksCount = library.sections.reduce((total, section) => total + section.books_count,0);
    console.log(`${library.name} (${booksCount} books)`);
    library.sections.forEach (section => console.log(` - ${section.name} (${section.books_count} books)`))
  });
}
showLibraries();
