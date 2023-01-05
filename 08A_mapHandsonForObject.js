class Bank {
  constructor(bankName, location, accountNo, ifsc, interestRate) {
    this.bankName = bankName;
    this.location = location;
    this.accountNo = accountNo;
    this.ifsc = ifsc;
    this.interestRate = interestRate;
  }
}
console.log(`========== A. Created a class Bank and Added data members==========`);
console.log(`======================================================================`);
console.log(`========== B. Created the object ==========`);

const axis_bank = new Bank('Axis Bank', 'Mumbai', '902216258', 'UTIB00021', 7.5);
const sbi_bank = new Bank('SBI Bank', 'Pune', '31470789', 'ISBN00056', 7.0);
const icici_bank = new Bank('ICICI Bank', 'Chennai', '345568567', 'ICICI34567', 8.0);
const kotak_bank = new Bank('Kotak Bank', 'Katraj', '456722588', 'KOTAK45678', 8.0);
const hdfc_bank = new Bank('HDFC Bank', 'Nashik', '567254889', 'HDFC56789', 7.0);
const panjab_bank = new Bank('Panjab Bank', 'Beed', '672694890', 'PANJAB67890', 6.0);

console.log(axis_bank);
console.log(sbi_bank);
console.log(icici_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(panjab_bank);

console.log(`======================================================================`);
console.log(`=========C. Maped key as accountNo and Values as objects=========`);
console.log(`======================================================================`);

const bankMap = new Map();

bankMap.set(axis_bank.accountNo, axis_bank);
bankMap.set(sbi_bank.accountNo, sbi_bank);
bankMap.set(icici_bank.accountNo, icici_bank);
bankMap.set(kotak_bank.accountNo, kotak_bank);
bankMap.set(hdfc_bank.accountNo, hdfc_bank);
bankMap.set(panjab_bank.accountNo, panjab_bank);
console.log(`=========D Travarse the map using bankName, accountNumber, interestRate========`);
for (const [accountNo, bank] of bankMap) {
  console.log(`Bank Name is: ${bank.bankName}, Account No is: ${bank.accountNo}, Interest Rate is: ${bank.interestRate}`);
}
