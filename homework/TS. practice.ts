//TODO: Task 1

/*
  2. Создайте интерфейс User с полями id (число), username (строка) и email (строка). 
      Затем создайте интерфейс Admin, который расширяет User, добавляя поле role (строка). 
      Напишите функцию, которая принимает массив пользователей и возвращает тех кто будет задан вторым параметром.
      [
        { id: 1, username: "user1", email: "user1@example.com" },
        { id: 2, username: "admin1", email: "admin1@example.com", role: "superadmin" }
      ]
*/

interface IUser {
  id: number;
  username: string;
  email: string;
}

interface IAdmin extends IUser {
  role: string;
}

function getSpecificUser(
  users: (IUser | IAdmin)[],
  userType: "user" | "admin"
) {
  return users.filter((user) =>
    userType === "user" ? !isAdmin(user) : isAdmin(user)
  );
}

function isAdmin(user: IUser | IAdmin): user is IAdmin {
  return "role" in user;
}

console.log(
  getSpecificUser(
    [
      { id: 1, username: "user1", email: "user1@example.com" },
      {
        id: 2,
        username: "admin1",
        email: "admin1@example.com",
        role: "superadmin",
      },
    ],
    "user"
  )
);

console.log(
  getSpecificUser(
    [
      { id: 1, username: "user1", email: "user1@example.com" },
      {
        id: 2,
        username: "admin1",
        email: "admin1@example.com",
        role: "superadmin",
      },
    ],
    "admin"
  )
);

//TODO: Task 2

/*
Напишите дженерик функцию, принимающую на вход массив данных типа Т и колбэк,
     и возвращающую булевый ответ, все ли значения массива возвращают тру при вызове колбэка.
     Если хотя бы 1 фолс - вся функция должна вернуть фолс
*/

//TODO: Task 3

/*
  Написать кастомный reduce
*/

//TODO: Task 4
/*
  5. Напишите функцию, которая принимает массив URL и возвращает массив данных, 
    полученных из этих URL с использованием fetch. 
    Используйте async/await.
    [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/5',
    'https://jsonplaceholder.typicode.com/todos/7',
    ]
*/

//TODO: Task 5

/*
нужно реализовать универсальное хранилище EntityRepository<T>, которое может:
- Добавлять новые элементы 
- Получать список всех элементов
- Получать один элемент (getOne(id?: string) Если id не передан — вернуть последний добавленный элемент
- Удалять элемент (remove(id?: string) Если id не передан — удалить последний добавленный элемент
- Обновлять элемент (Если id не передан — заменить последний добавленный элемент)
- Очищать хранилище
*/
