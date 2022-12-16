console.log(`Step 1`);

function maleMarriageEligibility(gender, age, boyName) {
  // console.log(
  //   `Personal Details : Name : ${boyName}, Gender : ${gender}, Age : ${age}`
  // );

  var result =
    gender === "Male" && age >= 21
      ? console.log(`Hey ${boyName} you are Eligible for Marriage, your age is ${age}. `)
      : console.log(`Hey ${boyName} you are Not Eligible for Marriage, your age is ${age}.`);
  return result;
}

maleMarriageEligibility("Male", 25, "Billgates");

maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(
  `======================================================================`
);
console.log(`Step 2`);

function femaleMarriageEligibility(gender, age, girlName) {
  // console.log(
  //   `Personal Details : Name : ${girlName}, Gender : ${gender}, Age : ${age}`
  // );

  var result =
    gender === "Female" && age >= 18
      ? console.log(`Hey ${girlName} you are Eligible for Marriage, your age is ${age}. `)
      : console.log(`Hey ${girlName} you ar Not Eligible for Marriage, your age is ${age}.`);
  return result;
}

femaleMarriageEligibility("Female", 16, "Jenifer");
// console.log(`Eligibility Result : Hey ${maleMarriageEligibility("Male",25,"Billgates") } you are Eligible for Marriage.`);

femaleMarriageEligibility("Female", 27, "Malinda Gates");
