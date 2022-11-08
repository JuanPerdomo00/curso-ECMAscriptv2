const user = {username: "jakepy", age: 19, country: "CO"};
const { username, ...value } = user;
console.log(username);
console.log(value);
