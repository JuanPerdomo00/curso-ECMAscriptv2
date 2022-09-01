/*
! set, add
*/

const list = new Set();

list.add("item1");
list.add("item2").add("item3").add("item3"); // ! los set no pueden terner item repetidos

console.log(list);
