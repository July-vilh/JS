/*Nock — это библиотека для создания фиктивных (mock) HTTP запросов в тестах. Она перехватывает
 исходящие запросы и предоставляет заранее определённые ответы вместо настоящих.

axios — это популярная JavaScript-библиотека для выполнения HTTP-запросов. 
Она позволяет легко отправлять запросы на сервер и обрабатывать ответы. 
С помощью axios можно отправлять различные типы HTTP-запросов, такие как GET, POST, PUT, DELETE, 
и другие, а также работать с ответами, включая обработку заголовков, статусов и данных.

async и await — это синтаксические конструкции в JavaScript, которые упрощают работу с асинхронным кодом.


Что происходит?
Настроенный мок перехватывает HTTP-запрос на указанный URL.
axios отправляет GET-запрос, который обрабатывается моком и возвращает заранее заданный ответ.
Полученные данные обрабатываются и выводятся в консоль.
Если при запросе или обработке данных возникает ошибка, она отлавливается и также выводится в консоль.

Зачем?
Управление ответами - контроль ответов сервера, 
что позволяет проверить реакцию системы на различные сценарии, включая ошибки сервера.
Ускорение тестирования - Тесты с мокированными запросами выполняются быстрее, 
так как не требуется реальное сетевое взаимодействие и различные задержки

при мокировании запросов реальный запрос на сервер не посылается. 
Вместо этого мокирование перехватывает вызовы к сети, которые должны 
были быть отправлены на сервер, и возвращает заранее определённые ответы, 
которые были настроены в коде мокирования.
 */
const nock = require('nock');
const axios = require('axios');

//Замокаем get запрос
nock('https://reqres.in').
get('/api/users?page=2').
reply(200,{
    page:2,
    per_page: 6,
    total: 12,
    total_pages: 2,
    someCategoryId: 312,
    data: [
        { id: 7, email: 'vitali.b@mail.com', first_name: 'Vitali', last_name: 'B', avatar: 'https://reqres.in/img/faces/7-image.jpg' },
        { id: 8, email: 'lindsay.ferguson@reqres.in', first_name: 'Lindsay', last_name: 'Ferguson', avatar: 'https://reqres.in/img/faces/8-image.jpg' },
        { id: 9, email: 'tobias.funke@reqres.in', first_name: 'Tobias', last_name: 'Funke', avatar: 'https://reqres.in/img/faces/9-image.jpg' },
        { id: 10, email: 'byron.fields@reqres.in', first_name: 'Byron', last_name: 'Fields', avatar: 'https://reqres.in/img/faces/10-image.jpg' },
        { id: 11, email: 'george.edwards@reqres.in', first_name: 'George', last_name: 'Edwards', avatar: 'https://reqres.in/img/faces/11-image.jpg' },
        { id: 12, email: 'rachel.howell@reqres.in', first_name: 'Rachel', last_name: 'Howell', avatar: 'https://reqres.in/img/faces/12-image.jpg' }
      ]
        
});

//использует axios для отправки GET-запроса и получения данных пользователей. 
//Возвращает данные, полученные в ответе (response.data).
async function fetchUsers(){//get
    const response = await axios.get('https://reqres.in/api/users?page=2');
    return response.data;
}
//Внутри функции вызывается fetchUsers, и результаты выводятся в консоль. 
//В случае возникновения ошибок, они также перехватываются и выводятся в консоль.
async function handleFetchUsers(){//get
    try{
        const data = await fetchUsers();
        console.log("Get response with multiple users", data);
    }catch(error){
        console.log("Error fetching users", error);
    }
}

handleFetchUsers();





nock('https://reqres.in').
post('/api/users', {name: 'John Doe'})
.reply(201, {id: 2, name: 'John Black'});

//функция для post запроса
async function createUser(){
    const response = await axios.post('https://reqres.in/api/users', {name: 'John Doe'});
    return response.data;
}

//Обработка
async function handleCreateUser(){
    try{
        const user = await createUser();
        console.log("Post responses: ", user);
    }catch(error){
        console.log("Error fetching users", error);
    }
}
handleCreateUser();

nock('https://reqres.in').
put('/api/users/2', {name: 'John Doe Updated'}).
reply(200, {id: 2, name: 'John Doe Updated'});

async function updateUser(){
    const response = await axios.put('https://reqres.in/api/users/2', {name: 'John Doe Updated'});
    return response.data;
}

async function handleUpdateUser(){
    try{
        const user = await updateUser();
        console.log("PUT response: ", user);
    }catch(error){
        console.log("Error fetching users", error);
    }
}
handleUpdateUser();

nock('https://reqres.in').
delete('/api/users/2').
reply(222);

async function deleteUser(){
    const response = await axios.delete('https://reqres.in/api/users/2');
    return response.status;
}

async function handleDeleteUser(){
    try{
        const status = await deleteUser();
        console.log("DELETE response: ", status);
    }catch(error){
        console.log("Error fetching users", error);
    }
}

handleDeleteUser();
