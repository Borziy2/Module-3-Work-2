function User(name){
    this.name = name;
}

function Article(name,text){
    this.name = name;
    this.text = text;

}
let user = new User("Alex"); 
Object.defineProperty(user,'id', {
    value: 1,
    writable: false,
}),

// user.id = 2; 
 
user.getInfo = function () {
    return `User ${this.name} has ${this.articles.length} articles`;
};

console.log(user);


let article1 = new Article('React','React is awesome');
let article2 = new Article('Angular','Angular is awesome too');


user.articles = [article1,article2];

console.log(user);

console.log(user.getInfo());
