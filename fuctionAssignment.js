console.log("===1.Two function with no argument no return type===");
function codindFunction() {
  console.log("Every day is struggle with own destiny.");
  console.log("Every day I am getting better and better.");
}
codindFunction();
console.log("==========");
console.log("===2.WAF personalDetails===");
function personalDetails(fistName, lastName, collegeName) {
  console.log("First name is", fistName);
  console.log("Last name is", lastName);
  console.log("College name is", collegeName);
}
personalDetails("Kishor", "Bargaje", "Karmayogi Engineering College");
console.log("==========");

console.log("===3.WAF with two args===");
function swapValues(value1, value2){
    console.log("Before Swap-", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap-", value1, value2);
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);
console.log("==========");
console.log("===3.WAF with 3 parameter or args with return addition===");

function addThreeValues(value1, value2, value3){
    console.log(value1 + value2 + value3);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello","Good", "Morning" );
