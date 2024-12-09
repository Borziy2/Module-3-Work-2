function Article(name, text) {
  this.name = name;
  this.text = text;
}

function User(name, article) {
  this.name = name;
  this.articles = article;
}

User.prototype.logArticles = function () {
  this.articles.forEach((article, i) => {
    console.log(`Article ${i + 1} name is ${article.name}`);
  });
};

let article1 = new Article("React", "React is nice");
let article2 = new Article("Angular", "Angular is nice");

let user = new User("Alex", [article1, article2]);

console.log(user);

user.logArticles();
