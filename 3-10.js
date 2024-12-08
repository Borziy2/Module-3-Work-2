let user = {
  name: "Bob",
  age: 37,
  articles: [{ name: "React" }, { name: "javaScript" }, { name: "Backend" }],
};

const getUserArticleCount = (user) => {
  console.log(`User has ${user.articles.length} articles`);

  // switch (user.articles.length) {
  //     case 0:
  //     case 1:
  //         console.log('You need more!');
  //         break;
  //         case 2:
  //         case 3:
  //             console.log('Good start!');
  //             break;
  //     default:
  //         console.log('Keep going!');
  //         break;
  // }

  switch (true) {
    case user.articles.length < 2:
      console.log("You need more!");
      break;

    case user.articles.length < 4:
      console.log("Good start!");
      break;

    default:
      console.log("Keep going!");
      break;
  }
};

getUserArticleCount(user);
