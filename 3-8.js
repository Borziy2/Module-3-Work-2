let user1 = { name: 'Alex'};
let user2 = { name: 'Bob'};

let article1 = { name: 'React'};
let article2 = { name: 'Angular'};
let article3 = { name: 'Vue'};


let userArticles = new Map();

userArticles.set(user1,[article1,article2]);
userArticles.set(user2,[article3]);

console.log(userArticles);



function onlyUnique(arr){
    let setFromArray =  new Set(arr);
    return Array.from(setFromArray)
};



let newArr = [1,2,3,58,5,6,7,8]

console.log(onlyUnique(newArr));
