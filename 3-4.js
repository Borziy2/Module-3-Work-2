let articles = ["JavaScript", "Techlogies", "React"];

articles.push("Angular");

console.log(articles);

let firstArticle = articles.shift();
console.log(firstArticle);
console.log(articles);

let indexOfReact = articles.indexOf("React");
console.log("React is artcle number", indexOfReact + 1);
