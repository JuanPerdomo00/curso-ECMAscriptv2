const promesa1 = new Promise((resolve, reject) => reject("trject"));
const promesa2 = new Promise((resolve, rejact) => resolve("resolve"));
const promesa3 = new Promise((resolve, rejact) => resolve("resolve3"));

Promise.any([promesa1, promesa2, promesa3]).then((res) => console.log(res));
