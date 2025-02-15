const { faker } = require('@faker-js/faker');

function generateUsers(numberOfUsers) {
    let users = [];
    for (let i = 1; i <= numberOfUsers; i++) {
        let userId = i; //user id will be from 1 to ...length
        let id = 100 + i; // 100 + i чтобы начать id с 101
        let user = {
            userId: userId.toString(),
            id: id.toString(),
            title: faker.lorem.sentence(),
            body: faker.lorem.paragraph(),
            //slug: faker.lorem.slug(),
            //word: faker.lorem.word(),
            //faker.internet.color(),
            //faker.food.description()
        };
        users.push(user);
    }
    return users;
}

module.exports = { generateUsers };  // Экспортируем функцию
