async function* otroGenerador() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const gen = otroGenerador();
gen.next().then((res) => console.log(res));
gen.next().then((res) => console.log(res));
gen.next().then((res) => console.log(res));

console.log("Hello!");

async function arrOfName(arr) {
  for await (let value of arr) {
    console.log(value);
  }
}

const names = arrOfName(["jake", "andw", "rene", "jamie"]);
console.log("No me detengo");
