/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state) {
 let result = parks.filter((park) => park.location.state === state);
  return result;
}

function getWishlistParksForUser(parks, users, username) {
  let wishlist = users[username].wishlist;
  let wishlistParks = parks.filter((park) => {
    return wishlist.includes(park.id);
  });
 return wishlistParks;
};

function userHasVisitedAllParksInState(parks, users, state, username) {
  let parksByState = getParksByState(parks, state);
  let result = parksByState.every((park) => users[username].visited.includes(park.id));
  return result;
 
}
   
function userHasVisitedParkOnWishlist(users, username1, username2) {
  return users[username1]["visited"].some(park => users[username2]["wishlist"].includes(park));
  
  
}

function getUsersForUserWishlist(users, username) {
//   let emptyArray = [];
//   let result = user[username].some((user) => users[user].visited.includes(users[username].wishlist));
//  emptyArray.push(users[user]);

let visitors = [];
//create an empty array
for (let user in users) {
  if (userHasVisitedParkOnWishlist(users, user, username)) {
    visitors.push(user);
  }
  }
  return visitors;
}
  
  //return the array

  
module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
