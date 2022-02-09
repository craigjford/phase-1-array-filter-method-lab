const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(collection, name) {
    let newArray = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].toUpperCase() === name.toUpperCase()) {
            newArray.push(collection[i]);
        }
    }
    return newArray; 
} 

findMatching(drivers, 'Bobby');
findMatching(drivers, 'Sammy');

function fuzzyMatch(collection, name) {
    let newArray = [];
    let num = name.length;
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].slice(0,num).toUpperCase() === name.slice(0,num).toUpperCase()) {
            newArray.push(collection[i]);
        }
    }
    return newArray;
}
fuzzyMatch(drivers, 'Sa');

const driversArr = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(collection, name) {
      const newDrivers = [];
      for (const driver of collection) {
          if (driver.name === name) {
              newDrivers.push(driver);
          }
      }
      return newDrivers;
  }

  matchName(driversArr, 'Bobby');
