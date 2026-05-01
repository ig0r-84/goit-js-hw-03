// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// const allName = [];
// for (const name of products) {
//   allName.push(name.name);
// }
// const allPrice = [];
// for (const price of products) {
//   allPrice.push(price.price);
// }
// const allQuantity = [];
// for (const quantity of products) {
//   allQuantity.push(quantity.quantity);
// }
// console.log(allNam);
// function greet(name) {
//   return `Welcome ${name}!`;
// }

// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet('Mango')); // "Welcome Mango!"

// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() {return `Welcome ${name}!`}
// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }

// const result = makePizza();
// const pointer = makePizza;
// console.log(result);
// console.log(pointer);
// Перебираючий метод forEach
// const numbers = [5, 10, 15, 20, 25];

// // Звичайна анонімна функція
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });
// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Tell-Tale Heart',
    author: 'Edgar Allan Poe',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
  .toSorted((a, b) => a.localeCompare(b));
console.log(names);
