class Article {
  constructor(name, text) {
    this.name = name;
    this.text = text;
  }
}
class User {
  constructor(name, article) {
    this.name = name;
    this.articles = article;
  }

  logArticles() {
    this.articles.forEach((article, i) => {
      console.log(`Article ${i + 1} name is ${article.name}`);
    });
  }
}

let article1 = new Article("React", "React is nice");
let article2 = new Article("Angular", "Angular is nice");

let user = new User("Alex", [article1, article2]);

console.log(user);

user.logArticles();
