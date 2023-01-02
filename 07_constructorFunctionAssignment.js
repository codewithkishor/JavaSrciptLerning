function bankDetails(bankName,location,ifscCode,branchCode){
    this.bankName  = bankName;     
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}
let yesBank = new bankDetails("Yes Bank","Mumbai","IFSC1234","yesBank1234");
let sbiBank = new bankDetails("SBI Bank","Indapur","IFSC1232","sbiBank1266");
let mahaBank = new bankDetails("MAHA Bank","Baramati","IFSC1238","mahaBank1237");
let axisBank = new bankDetails("Axis Bank","Pune","IFSC1235","axisBank1276");

let openTime=bankDetails.prototype="9 AM IST";
let closeTime=bankDetails.prototype="6 PM IST";

console.log(`1)`);
console.log(`Bank Details Is :  Bank Name-:${yesBank.bankName}, Branch-:${yesBank.location}, IFSC Code-: ${yesBank.ifscCode}, Branch Code-:${yesBank.branchCode}`);
console.log(``);
// console.log(`Bank Details Is :  Bank Name-:${sbiBank.bankName}, Branch-:${sbiBank.location}, IFSC Code-: ${sbiBank.ifscCode}, Branch Code-:${sbiBank.branchCode}`);
// console.log(``);
// console.log(`Bank Details Is :  Bank Name-:${mahaBank.bankName}, Branch-:${mahaBank.location}, IFSC Code-: ${mahaBank.ifscCode}, Branch Code-:${mahaBank.branchCode}`);
// console.log(``);
// console.log(`Bank Details Is :  Bank Name-:${axisBank.bankName}, Branch-:${axisBank.location}, IFSC Code-: ${axisBank.ifscCode}, Branch Code-:${axisBank.branchCode}`);
// console.log(`____________`);
// console.log(`2)`);
// console.log(`Open Time Of SBI Bank =${openTime} And Close Time Of Bank = ${closeTime}`);
// console.log(`____________`);
// console.log(`3)`);
// console.log(`The Open Time Of ${axisBank.bankName}=is ${openTime} And Close Is = ${closeTime}`);
// console.log(`____________`);
// console.log(`4)`);
// console.log(`The Bank Name Is ${yesBank.bankName}. Branch Code Is ${yesBank.branchCode}. And Open time Is = ${openTime} `);
// console.log(`____________`);