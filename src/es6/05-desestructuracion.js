/* 
desestructuracion en javascript
*/

//! arrays destructuring

let fruits = ["apple", "banana"];

let [a, b] = fruits;

console.log(a, b);

//! object destructuring

let objUser = {
  userName: "jakepy",
  age: 19,
};

let { userName: nombre, age: edad } = objUser;

console.log(nombre, edad);
