const otraFuncion = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Hey!!");
    } else {
      reject("jsjsjs");
    }
  });
};

otraFuncion()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("La promesa termino"));
