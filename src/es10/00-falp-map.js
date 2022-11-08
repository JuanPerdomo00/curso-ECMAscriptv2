// flap
const arr = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11]]];
console.log(arr.flat(3));

// flatMap
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.flatMap((v) => [v, v * 2, Math.PI]));
