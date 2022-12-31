console.log(`Object with data member and member function`);
class Bank {
    constructor(bankName, location, accountNo, ifsc, interestRate) {
      this.bankName = bankName;
      this.location = location;
      this.accountNo = accountNo;
      this.ifsc = ifsc;
      this.interestRate = interestRate;
    }
  
    showDetails() {
      console.log(`Bank Name: ${this.bankName} | Location: ${this.location} | Account No: ${this.accountNo} | IFSC: ${this.ifsc} | Interest Rate: ${this.interestRate}`);
    }
  }
  
  const sbiBank = new Bank('SBI', 'Delhi', '123456789', 'SBIN123456', 6.0);
  const axisBank = new Bank('Axis', 'Mumbai', '987654321', 'AXIS987654', 6.5);
  const hdfcBank = new Bank('HDFC', 'Chennai', '567891234', 'HDFC567890', 7.0);
  const yesBank = new Bank('Yes', 'Bangalore', '123498765', 'YES123498', 7.5);
  
  sbiBank.showDetails();
  axisBank.showDetails();
  hdfcBank.showDetails();
  yesBank.showDetails();
  