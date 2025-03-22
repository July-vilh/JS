//TODO: DEMO:

// 1. Создайте класс Animal
// 2. В конструкторе класс должен принимать следующие параметры:
//   - type
//   - color
//   - weight
//   - height
//   - place of origin
// 3. Добавьте в класс метод: getInfo, который возвращает в строке полную информацию о животном (используйте шаблонные строки с `${}` синтаксисом)
// 4. Создайте геттер для поля color (get color), не забывая что при этом поле должно быть _color
// 5. Создайте сеттер для поля color (set color(newColor)). В сеттере проверяйте, является ли цвет одним из следующих:
//   - Красный
//   - Черный
//   - Белый
//   - Синий
// Если не является - кидаем ошибку через throw new Error('текст ошибки')
// 6. Создайте класс Snake, который будет наследовать класс Animal
// 7. Создайте конструктор в классе Snake, который будет принимать все необходимые поля из класса Animal, а также поле isPoisonous
// 8. С помощью super() вызовите конструктор родителя, передав необходимые параметры
// === 9. В классе Snake создать метод checkPoisonous(), который возвращает true/false ====
// === 10. Сделайте поле isPoisonous приватным в классе Snake ====

// Task 2.
// 1. Создайте класс Bird с приватным полем isFlying, отнаследовавшись от Animal
// 2. Создайте класс CatLike с публичным полем isSafeToPet, отнаследовавшись от Animal
// === 3. Создайте класс Worker, реализующий следующий интерфейс (набор полей и методов):
//     class Worker
//       firstName
//       lastName
//       phone
//       getFullName()
// 4. Создайте класс Zoo, реализующий следующий интерфейс:
//     class Zoo
//       address
//       title
//       ticket price
//       workers: []
//       animals: [],
// 5. Добавьте геттеры и сеттеры к полям address, title, ticket price
// 6. Добавьте метод addWorker(worker), добавляющий работника в массив workers.
//     На вход метод должен принимать объект класса Worker.
//     Если объект не является инстансом класса Worker - выкинуть ошибку
// 7. Добавьте метод addAnimal(animal), добавляющий животное в массив animals.
//     На вход метод должен принимать объект класса Animal, как и любого из его наследников.
//     Если объект не является инстансом класса Animal - выкинуть ошибку
//     ТАКЖЕ, если объект является инстансом класса Snake - выкинуть ошибку с тексом "There will be no snakes, mister Potter!"
// 8. Добавьте методы removeWorker() и removeAnimal() // Подумайте, как будем удалять, по какому полю будем выбирать:)

class Animal {
  #color;
  constructor(type, color, weight, height, placeOfOrigin) {
    this.type = type;
    this.#color = color;
    this.weight = weight;
    this.height = height;
    this.placeOfOrigin = placeOfOrigin;
  }
  getInfo() {
    return `Type: ${this.type}\nColor: ${this.color}\nWeight: ${this.weight}\nHeight: ${this.height}\nPlace of origin: ${this.placeOfOrigin}`;
  }

  get color() {
    return this.#color;
  }

  set color(newColor) {
    if (!color || typeof color !== "string") {
      throw new Error("Color must be a string");
    } else if (
      color !== "red" &&
      color !== "black" &&
      color !== "white" &&
      color !== "blue"
    ) {
      throw new Error("Color must be red, black, white or blue");
    }
    this.#color = newColor;
  }
}

class Snake extends Animal {
  constructor(type, color, weight, height, placeOfOrigin, isPoisonous){
    super(type, color, weight, height, placeOfOrigin);
    this.isPoisonous = isPoisonous;
  }
}

class Bird extends Animal {
  constructor(type, color, weight, height, placeOfOrigin, isFlying){
    super(type, color, weight, height, placeOfOrigin);
    this.isFlying = isFlying;
  }
}

class CatLike extends Animal {
  constructor(type, color, weight, height, placeOfOrigin, isSafeToPet){
    super(type, color, weight, height, placeOfOrigin);
    this.isSafeToPet = isSafeToPet;
  }
}

class Zoo {
  #animals = [];
  constructor(address, title, ticketPrice){
    this.address = address;
    this.title = title;
    this.ticketPrice = ticketPrice;
    this.workers = [];
  }
  setAnimal(animal){
    if(!(animal instanceof Animal)) {
      throw new Error("Animal must be an instance of Animal");
    }
    this.#animals.push(animal);
  }

}

const zoo = new Zoo("1st avenue", "Zoo", 10);

const bird = new Bird("Bird", "black", 1, 1, "Russia", "Kakadu", true);
const snake = new Snake("Snake", "black", 1, 1, "Russia", "Kaa", true);
const cat = new CatLike("Cat", "black", 1, 1, "Russia", "Boris", true);

zoo.setAnimal(bird);
zoo.setAnimal(new Bird("Bird", "black", 2, 3, "USA", false));
zoo.setAnimal(cat);
console.log(zoo);



