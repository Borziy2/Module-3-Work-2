let user = {
    name:'Bob',
    age:37,
    articles: [{name:'React'},{name:'javaScript'},{name:'Backend'}],
};

for (const key in user) {
    console.log(key);

}

const logUsersArticles = (user)=> {
    let usersArticles = user.articles;
    for (let index = 0; index < usersArticles.length; index++) {
        const article = usersArticles[index];
       console.log(`Article ${index + 1} name is ${article.name}`);
        
    }
}

logUsersArticles(user)