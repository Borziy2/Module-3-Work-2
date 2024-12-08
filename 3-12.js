function userBuillder(name, age) {
  const nameDefault = "username";
  const ageDefault = 99;

  if (!name) name = nameDefault;
  if (!age) age = ageDefault;

  function createUser() {
    return {
      name: name,
      age: age,
    };
  }
  return createUser;
}

let userCreator1 = userBuillder("Alex", 27);
let userCreator2 = userBuillder("Alex");
let userCreator3 = userBuillder();

console.log(userCreator1());
console.log(userCreator2());
console.log(userCreator3());
