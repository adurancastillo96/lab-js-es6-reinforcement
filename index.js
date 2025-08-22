const { usersArray } = require('./data.js');

// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************

const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    // Your code goes here ...
    userFirstNames.push(user.firstName);
  }
  return userFirstNames;
};

console.log("Iteration 1");
console.log("================");
console.log(getFirstNames(usersArray));
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
  // Your code goes here ...
  const userFullNames = [];
  for (let user of arr) {
    userFullNames.push(`${user.firstName} ${user.lastName}`);
  }
  return userFullNames;
};

console.log("Iteration 2");
console.log("================");
console.log(getFullNames(usersArray));
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
  // Your code goes here ...
  const userCreditDetails = [];
  for (let user of arr) {
    const { firstName, lastName, balance } = user;
    const userDetails = { firstName, lastName, balance };
    userCreditDetails.push(userDetails);
  }
  return userCreditDetails;
};

console.log("Iteration 3");
console.log("================");
console.log(getUsersCreditDetails(usersArray));
// expected output:
// [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
// { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
// { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
// { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
// { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
// { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
// { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]

// ***************************************************************************
// Iteration 4 - practice `.filter()` method and how to return two elements
// ***************************************************************************

const genderView = users => {
  // Your code goes here ...
  const femaleUsers = users.filter(user => user.gender === "female").map(user => `${user.firstName} ${user.lastName}`);
  const maleUsers = users.filter(user => user.gender === "male").map(user => `${user.firstName} ${user.lastName}`);
  return { femaleUsers: femaleUsers, maleUsers: maleUsers };
};

console.log("Iteration 4");
console.log("================");
console.log(genderView(usersArray));
// expected output:
// {
//    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
//    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// }

// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************

const data = genderView(usersArray);

const genderCount = data => {
  // Your code goes here ...
  let howManyFemale = data.femaleUsers.length;
  let howManyMale = data.maleUsers.length;
  return `Female: ${howManyFemale} Male: ${howManyMale}`;
};

console.log("Iteration 5");
console.log("================");
console.log(genderCount(data));
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = users => {
  // Your code goes here ...
  for (let user of users) {
    let userBalance = user.balance.toString().split(",").join("").split("$").join("");
    userBalance = Number(userBalance);
    userBalance = Math.round(userBalance);
    if (userBalance > 20000) {
      console.log(`Dear ${user.firstName}, since your balance is ${user.balance}, you are eligible to apply for this awesome credit card.`);
    }
  }
};

console.log("Iteration 6");
console.log("================");
console.log(promo20(usersArray));

// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  // Your code goes here ...
  let usersArrayActive = [...users];
  for (let user of usersArrayActive) {
    user.isActive = true;
  }
  return usersArrayActive;
};

console.log("Iteration 7");
console.log("================");
console.log(addActive(usersArray));
// expected output:
// [
//    { firstName: 'Kirby',
//      lastName: 'Doyle',
//      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//      isActive: true,
//      balance: '$3,570.06',
//      gender: 'male'
//    },
//    {
//      // ...
//    }
// ]
