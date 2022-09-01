/* 
! promesas
*/

/* 
Las promesas pueden ser algo que va a pasar.
Pueden ser hoy, manana, o nunca. Como volver con tu ex jsjs
*/

const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("HEyyy");
    } else {
      reject("No funciono :(");
    }
  });
};

anotherFunction()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
