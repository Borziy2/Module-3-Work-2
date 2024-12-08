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

user.logUserArticles = logUserArticles;
user.logUserArticles();
