// spec.js
const { test, expect } = require('@playwright/test');
const { generateUsers } = require('../constants/faker.js');  // Путь к файлу faker.js

test.only('POST request to update user with multiple test data', async ({ request }) => {
    // Генерация тестовых данных
    const testDataArray = generateUsers(4);  // Создаем 4 тестовых пользователя
    
    // Перебираем массив тестовых данных
    for (let i = 0; i < testDataArray.length; i++) {
        const updatedUserData = testDataArray[i]; //updatedUserData will contain each of 4 users
        
        const response = await request.post(`https://jsonplaceholder.typicode.com/posts/`, {
            data: updatedUserData
        });
    
        const responseBody = await response.json();
        console.log('User data:', responseBody);
 
    }
