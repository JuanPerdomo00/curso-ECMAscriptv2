/* 
! generadores en javascript
*/

function* gen(arr) {
  for (const iterator of arr) {
    yield iterator;
  }
}

const it = gen(["jakepys", "kiolo", "logforjsakr", "antonieta de las nieves"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
