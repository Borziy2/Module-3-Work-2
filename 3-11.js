let user = {
    name:'Bob',
    age:37,
    articles: [{name:'React'},{name:'javaScript'},{name:'Backend'}],
};

const logUserArticles = (user) =>{
    let usersArticles = user.articles;


 usersArticles.forEach((article, index) => {
    console.log(`Article ${index + 1} name is ${article.name}`);
        
});

};


logUserArticles(user)

user.articles = user.articles.map((article) =>{
 article.text = 'default text';
 return article;
});

console.log(user);

let articlesName = user.articles.reduce((prev,curr) =>{
return prev + ' ' + curr.name
},'')

console.log(articlesName);
