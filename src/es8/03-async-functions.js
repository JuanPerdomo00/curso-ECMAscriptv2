/* 
! Funciones asyncronas
*/

const funcionAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Good bro"), 2000)
      : reject(new Error("Failed to set timeout"));
  });
};

const otraFunc = async () => {
  const espera = await funcionAsync();
  console.log(espera);
  console.log("Hola");
};

console.log("jsjsjs");
otraFunc();
console.log("bye");
