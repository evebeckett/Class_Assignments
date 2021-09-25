/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function findParkByName(parks, name) {
  const found = element => element.name === name
  return parks.find(found);
}

function allParksAboveCertainSize(parks, minSize) {
  const greaterThan = element => element.areaInSquareKm > minSize;
  return parks.every(greaterThan);
}

function getBigParkNames(parks, minSize) {
  const greaterThan = element => element.areaInSquareKm >= minSize;
  const parkName = element => element.name;
  return parks.filter(greaterThan).map(parkName);  
 
}

function doesStateHaveOneBigPark(parks, minSize, state) {
  const locationByState = element => element.location.state === state;
  const greaterThan = element => element.areaInSquareKm >= minSize;
  return parks.filter(locationByState).some(greaterThan);
}

module.exports = {
  findParkByName,
  allParksAboveCertainSize,
  getBigParkNames,
  doesStateHaveOneBigPark,
};
