//! forma normal
function newUser(name, age, country) {
  var name = name || "jakepys";
  var age = age || 19;
  var country = country || "CO";
  console.log(name, age, country);
}

newUser();
newUser("noe", 59);

//! forma es6
function newAdmin(name = "admin", password = "root", role = "Developer") {
  console.log(name, password, role);
}

newAdmin();
newAdmin("jakepy", "passwordofjakepy", "Developer Js DevOps");
