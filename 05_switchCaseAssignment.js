var monthOfYear = function (monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`January`);
      break;
    case 2:
      console.log(`2.February`);
      console.log(`February is the month 2nd month of the Year.`);
      break;
    case 3:
      console.log(`March`);
      break;
    case 4:
      console.log(`April`);
      break;
    case 5:
      console.log(`5.May`);
      console.log(`May is the month 5th month of the Year.`);
      break;
    case 6:
      console.log(`June`);
      break;
    case 7:
      console.log(`July`);
      break;
    case 8:
      console.log(`August`);
      break;
    case 9:
      console.log(`September`);
      break;
    case 10:
      console.log(`Octomber`);
      break;
    case 11:
      console.log(`November`);
      break;
    case 12:
      console.log(`12.December`);
      console.log(`December is the month 12th month of the Year.`);
      break;
    default:
      console.log(`Not valid value provided.`);
     break;
  }
};
monthOfYear(2);
console.log( ``);
monthOfYear(5);
console.log( ``);
monthOfYear(12);
console.log( ``);
monthOfYear(15);
console.log( ``);
monthOfYear(100);
