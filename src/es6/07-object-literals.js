/* 
! Object literals
*/

function user(id, name, age, nick) {
  return {
    id,
    name,
    age,
    nick,
  };
}

console.log(user(1, "juan", 19, "jakepys"));
