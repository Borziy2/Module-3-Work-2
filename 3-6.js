function User(name) {
  this.name = name;
}

function Article(name, text) {
  this.name = name;
  this.text = text;
}
let user = new User("Alex");
console.log(user);

let article1 = new Article("React", "React is awesome");
let article2 = new Article("Angular", "Angular is awesome too");

user.article = [article1, article2];

console.log(user);
