// //  function countCharA(arg){
// //     sentence= "I AM Learning JavaScript, The Language of internet"
// //     var counter = 0;
// // for (let index = 0; index < sentence.length; index++) {
// //   var char = sentence.charAt(index);
// //   var charCopy = char.toLowerCase();
// //   if (char == "a" ) {
// //         console.log(char);
// //         counter = counter + 1;
// //        console.log(`char lenght is ${counter}`);
// //        console.log(`Total a/A in string is : ${char}`);
    
// //       }
// //     }
// // }
// // countCharA("I AM Learning JavaScript, The Language of internet");
// // countCharA("My favourite movie is LAggAn")
// var sentence = "I AM Learning JavaScript, The Language of internet";
// var counter = 0;
// for (let index = 0; index < sentence.length; index++) {
//   var char = sentence.charAt(index);
//   var charCopy = char.toLowerCase();
//   if (
//     charCopy == "a") {
//     console.log();
//     counter = counter + 1;
//   }
// }
// console.log(`Total character count of a/A in "${sentence}" are: ${counter}`);
// console.log(`===============================================================`);
// var sentence1 = "My favourite movie is LAggAn";
// var counter = 0;
// for (let index = 0; index < sentence1.length; index++) {
//   var char1 = sentence1.charAt(index);
//   var charCopy = char1.toLowerCase();
//   if (
//     charCopy == "a") {
//     console.log();
//     counter = counter + 1;
//   }
// }
// console.log(`Total character count of a/A in "${sentence1}" are: ${counter}`);







 function countCharA(arg){
    
    var argCopy = arg.toLowerCase();
    console.log(`String out put to lowercase is ${argCopy}`);
    counter=0;
    for  (let index = 0; index < argCopy.length; index++){
        var char=argCopy.charAt(index);
        if (char=="a"){
        counter = counter + 1;
        }
    }
console.log(`Total count in give string ${counter}`);
}
countCharA("I AM Learning JavaScript, The Language of internet");
countCharA("My favourite movie is LAggAn");





