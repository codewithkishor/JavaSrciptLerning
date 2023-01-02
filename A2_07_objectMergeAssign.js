const car = {
    carName: "Creta SX",
    company: "Hundai",
    launchYear: 2017
    }
    const carEngine = {
    enginePower: "1499CC", 
    maxPower: "113 BHP"
    }
    const mergedObject = Object.assign({}, car, carEngine);
  console.log(`Step 1 Merging using assign`);
console.log('The all specification of the Car and Car Engine are-', mergedObject);
console.log(`======================================================================`);

console.log(`Step 2 Merging using spread`);
const mergedObjects = {...car, ...carEngine};
console.log('The all specification of the Car and Car Engine are-', mergedObjects);
