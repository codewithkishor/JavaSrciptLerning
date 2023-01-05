class Bank {
    constructor(bank_name, location, account_no, ifsc, interest_rate) {
      this.bank_name = bank_name;
      this.location = location;
      this.account_no = account_no;
      this.ifsc = ifsc;
      this.interest_rate = interest_rate;
    }
  }
  
  const axis_bank = new Bank('Axis Bank', 'Delhi', 123456, 'AXIS0001', 6.5);
  const sbi_bank = new Bank('SBI Bank', 'Mumbai', 654321, 'SBI0001', 7.0);
  const icici_bank = new Bank('ICICI Bank', 'Kolkata', 111111, 'ICICI0001', 6.0);
  const kotak_bank = new Bank('Kotak Bank', 'Chennai', 222222, 'KOTAK0001', 8.5);
  const hdfc_bank = new Bank('HDFC Bank', 'Bangalore', 333333, 'HDFC0001', 7.5);
  const panjab_bank = new Bank('Panjab Bank', 'Pune', 444444, 'PANJAB0001', 6.0);

  const banks = [axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, panjab_bank];
  console.log(axis_bank);
  console.log(sbi_bank);
  console.log(icici_bank);
  console.log(kotak_bank);
  console.log(hdfc_bank);
  console.log(panjab_bank);
 
console.log(`==========C. Bank Names and Locations==========`);
for (const bank of banks) {
  console.log(`Bank Name: ${bank.bank_name} Location: ${bank.location}`);
  
}
console.log(`==========D. Kotak bank name using for of loop ==========`);
for (const bank of banks) {
  if (bank.bank_name === 'Kotak Bank') {
    console.log(`The bank name is ${bank.bank_name}`);
    break;
  }
}

console.log(`==========E. Kotak bank detail using for of loop ==========`);
for (const property in kotak_bank) {
    console.log(`${property}: ${kotak_bank[property]}`);
  }
  