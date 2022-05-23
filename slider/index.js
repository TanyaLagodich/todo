// Тернарный оператор (не больше одного)

// BAD
let bool = true;
bool ? true : false;

// Область видимости (scope)
// Область видимости (scope) определяет видимость или доступность переменной (другого ресурса) 
// в области твоего кода.

// const, let
//Глобальная область видимости или Global Scope

// const message = 'Hello world';
// console.log(message); // ?

// if (true) {
//     const message = 'Hello world';
// }
// console.log(message); // ?

// Доступность перемнных ограничена их областью видимости
// if (true) {
//     const message = 'Hello world';
//     console.log(message); // ?
// }
// console.log(message); // ?

// В инструкциях if, for, while также создается блочная область видимости.

// for (const color of ['green', 'red', 'blue']) {
//     console.log(color); // ?
// }

// console.log(color); // ?

// {
//     const message = 'Hi';
//     console.log(message); // ?
// }
// console.log(message); // ?


// var - не имеет блочной области видимости
// if (true) {
//     var count = 0;
//     console.log(count); // ?
// }
// console.log(count); // ?

// Области видимости функции
// function getName() {
//     const userName = 'Tanya';
//     console.log(userName); // ?
// }
// getName();
// console.log(userName);

// Вложенная область видимости

// if (true) {
//     const message = 'Hello';

//     if (true) {
//         console.log(message); // ?

//         const userName = 'Tanya';
//     }

//     console.log(userName); // ?
// }

// Глобальная область видимости
// console.log(window);

// Лексическая область видимости

// function outer() {
//     // область видимости функции outer()
//     let v = 'Я из области видимости функции outer()!';

//     function inner() {
//         // область видимости функции inner()
//         console.log(v); // 'Я из области видимости функции outer()!'
//     }

//     return inner;
// }

// const f = outer();
// console.log(f);
// f(); // ?

// https://habr.com/ru/post/517338/

// https://habr.com/ru/post/149526/