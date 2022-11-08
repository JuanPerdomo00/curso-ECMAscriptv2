/*
! clases
*/

class User {
  constructor(nombre, nick, edad, esEstudiannte) {
    this.nombre = nombre;
    this.nick = nick;
    this.edad = edad;
    this.esEstudiannte = esEstudiannte;
    console.log(`Usuario ${this.nombre} Creado`);
  }

  // getter y setter
  get #getNick() {
    return `Tu nickName es: ${this.nick.toUpperCase()}`;
  }

  set #getNick(newNick) {
    this.nick = newNick;
  }
}

// generar instancia de la clase user

let usuarioOne = new User("Juan", "jakepy", 19, true);
let usuarioTwo = new User("Valentina", "valen0", 20, false);
let usuarioThree = new User("victor", "vacd0r", 26, true);

console.log(usuarioOne.getNick);
console.log(usuarioTwo.getNick);
console.log((usuarioThree.getNick = "shellboy"));
console.log(usuarioThree.getNick);
