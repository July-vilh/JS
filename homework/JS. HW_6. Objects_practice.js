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

// 2. Write a function that takes one argument (section ID or section name) 
// and returns the library to which the section belongs.
console.log(getLibrary(4)); // Central Library
console.log(getLibrary("Romance")); // Community Library

function getLibrary(nameOrId) {
  const found = libraries.find((library) => library.sections.find((section) => nameOrId === section.name || nameOrId === section.id));
  if(!found) throw new Error("No libraries found by given name or id");
  return found;
}

// 3. Write a function to add a new library. The function should accept the name of the library as an argument.
addLibrary("New Library");
console.log(libraries);

function addLibrary(name){
  const newLibrary = {
    id: getNewId(),
    name,
    sections: [],
  };
  libraries.push(newLibrary);
}

function getNewId(){
  return (libraries.reduce((max, library) => {
    if (library.id > max){
      max = library.id;
    }
    library.sections.forEach((section) => {
      if (section.id > max){
        max = section.id;
      }
    });
    return max;
  }, 0) + 1);
}

//4. Write a function to add a section to a library. The function should accept the library ID and the name of the section as arguments.
addSection(1, "New Section");
console.log(libraries);

function addSection(libraryId, sectionName) {
  const foundLibrary = libraries.find((library) => library.id === libraryId);
  if (!foundLibrary) throw new Error("Library not found by given ID");


  const newSection = {
    id: getNewId(),
    name: sectionName,
    books_count: 0,
  };
  foundLibrary.sections.push(newSection);
}

showLibraries()

// 5. Write a function to edit the name of a library. The function should accept the library ID and the new name of the library as arguments.
editLibrary(1, "New Library Name");

function editLibrary(idOrName, newName) {
  const foundLibrary = libraries.find((library) => library.id === idOrName || library.name === idOrName);
  if (!foundLibrary) throw new Error("Library not found by given ID");
  foundLibrary.name = newName;
}

// 6. Write a function to edit the name of a section. The function should accept the section ID and the new name of the section as arguments.
editSection(7, "New Section Name");
function editSection(sectionIdOrName, newName) {
  const section = findSection(sectionIdOrName);
  section.name = newName;
}

function findSection(idOrName){
  const foundLibrary = getLibrary(idOrName);
  const foundSection = foundLibrary.sections.find(section => section.id === idOrName || section.name === idOrName);
  return foundSection;
}

// 7. Write a function to delete a library. The function should accept the library ID as an argument.
deleteLibrary(1);

function deleteLibrary(id) {
  const index = libraries.findIndex(library => library.id === id);
  if (index === -1) throw new Error("Library not found by given ID");
  libraries.splice(index, 1);
}

//8. Write a function to delete a section. The function should accept the section ID as an argument. A section can only be deleted if it has no books.
deleteSection(3);

function deleteSection(sectionId) {
  const foundLibrary = getLibrary(sectionId);
  const index = foundLibrary.sections.findIndex(section => section.id === sectionId);
  if (index === -1) throw new Error("Section not found by given ID");
  foundLibrary.sections.splice(index, 1);
}

//9. Write a function to transfer books between sections within the same library.
// The function should accept two section IDs (from which the books will be transferred and to which they will be transferred) as arguments.
transferBooks(2, 4);

function transferBooks(sectionIDFrom, sectionIDTo) {
    const libraryFrom = getLibrary(sectionIDFrom);
    const libraryTo = getLibrary(sectionIDTo);
    if (libraryFrom !== libraryTo){
      throw new Error("Unable to transfer books from different libraries");
    }

    const sectionFrom = findSection(sectionIDFrom);
    const sectionTo = findSection(sectionIDTo);
    sectionTo.books_count += sectionFrom.books_count;
    sectionFrom.books_count = 0;
}

//TODO: Task 4. Насписать функцию которая возвращает ключ объекта по его значению
// variant1
function findKeyByValue(obj, value) {
  const entries = Object.entries(obj);
  const foundEntry = entries.find(array => array[1] === value);
  if(!foundEntry) throw new Error("Not found key by provided value");
  return foundEntry[0];
}

//variant2
function findKeyByValue(obj, value) {
 return Object.keys(obj).find((key) => obj[key] === value);
}

console.log(findKeyByValue({ a: 1, b: 2, c: 3 }, 2)); //b

//TODO: Task 5

//Compate 2 objects
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2, c: 3 };

function compareObjects(obj1, obj2) {
  if(Object.keys(obj1).length !== Object.keys(obj2))return false; //совпадает ли кол-во ключей
  for(const key in obj1) {
    if(!(key in obj2)) return false; //каждый из наших проверяемых ключей должен быть и в одном и во втором объекте
    if(obj1[key] !== obj2[key]) return false; //если хоть раз 1 значение не совпадает с другим то false
  }
  return true;
}
console.log(compareObjects(obj1, obj2));

// Task6
// функция которая выведет массив ключей приведенных к верхнему регистру
const obj = {
   name: "John",
   lastName: "Doe",
   age: 18,
   hobbies: ["travelling", "gaming", "coding"],
 };

function getKeysUpper(obj) {
  return Object.keys(obj).map(key => key.toUpperCase());
 }
 console.log(getKeysUpper(obj));

 // task7
 // получение всех значений из объекта как строки и если это массив то строки дб разбиты через запятую с пробелом
 function getValuesAsStrings(obj) {
  return Object.values(obj).map(value => {
    if(Array.isArray(value)){
      return value.join(", ")
    }
    if(typeof(value) === 'number'){
      return value.toString();
    }
    return value;
  })
 }
 console.log(getValuesAsStrings(obj));

 //task8
 // вернуть объект в виде ['key name = John' ]
 function getKeysAndValues(obj) {
  return Object.entries(obj).map(([key, value]) => `key ${key} = ${value}`);
 }
 console.log(getKeysAndValues(obj));

 //task9. Вывести метод который вернет полное имя
 const obj3 = {
   name: "John",
   lastName: "Doe",
   age: 18,
   hobbies: ["travelling", "gaming", "coding"],
   getFullName() {
     return `${this.name} ${this.lastName}`;
   },
 };

 console.log(obj3.getFullName());