/* 
! Spread Operator
*/

let person = { nombre: "jakepy", age: 19 };
let country = "CO";

let data = { id: 1, ...person, country };

console.log(data);

//! rest paramater
function suma(num, ...valores) {
  console.log(valores);
  console.log(num + valores[0]);

  return num + valores[0];
}

suma(1, 1, 2, 3)