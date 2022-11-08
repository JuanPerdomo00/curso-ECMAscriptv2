/* 
! Objects entries, keys, values
*/

let persona = {
  name: "jakepy",
  age: 19,
  city: "NeivaYork",
  CO: "Colombia",
};

console.log(Object.keys(persona), " <- Estas son las llaves del objeto \n");
console.log(
  Object.values(persona),
  " <- Estos son los valores de el objeto \n"
);
console.log(
  Object.entries(persona),
  " <- Estas son las llaves y valores de el objeto \n"
);
