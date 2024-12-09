let user = {
  name: "Bob",
  age: 37,
  articles: [{ name: "React" }, { name: "javaScript" }, { name: "Backend" }],
};

function logUserArticles() {
  let usersArticles = this.articles;

  usersArticles.forEach((article, index) => {
    console.log(`Article ${index + 1} name is ${article.name}`);
  });
}

logUserArticles.call(user);

let userLogArticles = logUserArticles.bind(user);

userLogArticles();
