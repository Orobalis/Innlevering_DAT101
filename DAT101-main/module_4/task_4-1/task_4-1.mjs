"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Create a constant object to hold account types with these properties:
Normal: bankkonto
Savings: sparkonto
Credit: kreditkonto
Pension: pensionskonto

Print all these types on a single comma-separated line:
Task 1: Account types: Checking, Savings, Credit, Investment
*/

const accountTypes = {
  Normal: "bankkonto",
  Savings: "sparkonto",
  Credit: "kreditkonto",
  Pension: "pensionskonto"
};
// Print all account types on a single line
printOut("Account types: " + accountTypes.Normal + ", " + accountTypes.Savings + ", " + accountTypes.Credit + ", " + accountTypes.Pension);

printOut(newLine);
printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Part 2: Basic Bank Account (15 points)
Create a bank account class with this structure:
TAccount
Private type
Public toString
Public setType(aType)

Let the constructor of the class have a parameter for the account type of this bank account class. And set
"type" to this parameter value. The "toString" method should return the account type. The "setType"
method should set "type" to this new value and print out the change of account type.
Create a constant instance of this "TAccount" class and name it "myAccount" with a "Normal" account
type. Then change the account type to "Saving".

Print something similar to this:
myAccount = Brukskonto
Account is changed from Brukskonto to Sparekonto
myAccount = Sparekonto
*/

class TAccount {
  #type;

  constructor(aType) {
    this.#type = aType;
  }

  toString() {
    return this.#type;
  }

  setType(aType) {
    console.log("Account is changed from " + this.#type + " to " + aType);
    this.#type = aType;
  }
}
// Create a constant instance of TAccount
const myAccount = new TAccount(accountTypes.Normal);
// Print the initial account type
printOut("myAccount = " + myAccount.toString());
// Change the account type to Savings
myAccount.setType(accountTypes.Savings);
// Print the new account type
printOut("myAccount = " + myAccount.toString());
// Print the change of account type


printOut(newLine);
printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* 
Part 3: Account Balance and Transactions (15 points)
Expand the account class to this structure:
TAccount
Private type
Private balance

Public toString()
Public setType(aType)
Public getBalance()
Public deposit(aAmount)
Public withdraw(aAmount)

"getBalance" should return the account balance. "deposit" should increase the balance by a given amount
and print the amount and the new balance. "withdraw" should decrease the balance by a given amount
and print the amount and the new balance.
Print something similar to this:
Deposit of 100, new balance is 100
Withdraw of 35, new balance is 65
My account balance is 65
*/

class TAccountWithBalance {
  #type;
  #balance;

  constructor(aType) {
    this.#type = aType;
    this.#balance = 0;
  }

  toString() {
    return this.#type;
  }

  setType(aType) {
    console.log("Account is changed from " + this.#type + " to " + aType);
    this.#type = aType;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(aAmount) {
    this.#balance += aAmount;
    console.log("Deposit of " + aAmount + ", new balance is " + this.#balance);
  }

  withdraw(aAmount) {
    this.#balance -= aAmount;
    console.log("Withdraw of " + aAmount + ", new balance is " + this.#balance);
  }
}
// Create a constant instance of TAccountWithBalance
const myAccountWithBalance = new TAccountWithBalance(accountTypes.Normal);
// Print the initial account type
printOut("myAccount = " + myAccountWithBalance.toString());
// Deposit 100
myAccountWithBalance.deposit(100);
// Withdraw 35
myAccountWithBalance.withdraw(35);
// Print the account balance
printOut("My account balance is " + myAccountWithBalance.getBalance());


printOut(newLine);
printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* 
Part 4: Withdrawal Limits (20 points)
Expand the account with a private counter that counts the number of withdrawals like this:
TAccount
Private type
Private balance
Private withdrawCount

Public toString()
Public setType(aType)
Public getBalance()
Public deposit(aAmount)
Public withdraw(aAmount)

Use a "switch statement" to check if the account type is "Pension" or "Saving". If the account type is a
savings account, you cannot make more than three withdrawals. The withdrawal counter should be reset if
the account type is changed or the deposit method is used. If the account type is a pension account, no
withdrawals are allowed.
Make sure that the account is set to "Saving" and that the balance is exactly 100, use "deposit" and
"setType" if necessary.
Attempt to print something like this:
Deposit of 25 new balance is 100
Withdraw of 30 new balance is 70
Withdraw of 30 new balance is 40
Withdraw of 30 new balance is 10
You cant withdraw more than 3 times from a savings account!
Account is changed from Sparekonto to Pensjonskonto
You cant withdraw from a pension account!
Account is changed from Pensjonskonto to Sparekonto
Withdraw of 10 new balance is 0
*/

class TAccountWithLimit {
  #type;
  #balance;
  #withdrawCount;

  constructor(aType) {
    this.#type = aType;
    this.#balance = 0;
    this.#withdrawCount = 0;
  }

  toString() {
    return this.#type;
  }

  setType(aType) {
    console.log("Account is changed from " + this.#type + " to " + aType);
    this.#type = aType;
    this.#withdrawCount = 0; // Reset the withdrawal counter
  }

  getBalance() {
    return this.#balance;
  }

  deposit(aAmount) {
    this.#balance += aAmount;
    console.log("Deposit of " + aAmount + ", new balance is " + this.#balance);
    this.#withdrawCount = 0; // Reset the withdrawal counter
  }

  withdraw(aAmount) {
    switch (this.#type) {
      case accountTypes.Savings:
        if (this.#withdrawCount >= 3) {
          console.log("You can't withdraw more than 3 times from a savings account!");
          return;
        }
        break;
      case accountTypes.Pension:
        console.log("You can't withdraw from a pension account!");
        return;
      default:
        break;
    }
    this.#balance -= aAmount;
    console.log("Withdraw of " + aAmount + ", new balance is " + this.#balance);
    this.#withdrawCount++;
  }
}
// Create a constant instance of TAccountWithLimit
const myAccountWithLimit = new TAccountWithLimit(accountTypes.Savings);
// Print the initial account type
printOut("myAccount = " + myAccountWithLimit.toString());
// Deposit 100
myAccountWithLimit.deposit(100);
// Withdraw 30 three times
myAccountWithLimit.withdraw(30);
myAccountWithLimit.withdraw(30);
myAccountWithLimit.withdraw(30);
// Attempt to withdraw a fourth time
myAccountWithLimit.withdraw(30);
// Change the account type to Pension
myAccountWithLimit.setType(accountTypes.Pension);
// Attempt to withdraw from a pension account
myAccountWithLimit.withdraw(10);
// Change the account type back to Savings
myAccountWithLimit.setType(accountTypes.Savings);
// Withdraw 10
myAccountWithLimit.withdraw(10);
// Print the account balance
printOut("My account balance is " + myAccountWithLimit.getBalance());


printOut(newLine);
printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* 
Part 5: Currency Handling (15 points)
Create a new static object as follows:
const currencyTypes = {
  NOK: "NOK",
  SEK: "SEK",
  DKK: "DKK",
  EUR: "EUR"
};

Add a private currency type to the account class and set the default value to "NOK".
Create a "public" "setCurrencyType" method so you can change the account currency. If this method tries
to switch to a new currency of the same type as the account already has, the method should do nothing
and just return. The new structure will be like this:
TAccount
Private type
Private balance = 0
Private withdrawCount
Private currencyType = "NOK"

Public toString()
Public setType(aType)
Public getBalance()
Public deposit(aAmount)
Public withdraw(aAmount)
Public setCurrencyType(aType)

Make a deposit to the account with an amount of 150, and let the output look like this:
Deposit of 150 NOK, new balance is 150 NOK
*/

const currencyTypes = {
  NOK: "NOK",
  SEK: "SEK",
  DKK: "DKK",
  EUR: "EUR"
};
class TAccountWithCurrency {
  #type;
  #balance;
  #withdrawCount;
  #currencyType;
  constructor(aType) {
    this.#type = aType;
    this.#balance = 0;
    this.#withdrawCount = 0;
    this.#currencyType = currencyTypes.NOK; // Default currency type
  }
  toString() {
    return this.#type;
  }
  setType(aType) {
    console.log("Account is changed from " + this.#type + " to " + aType);
    this.#type = aType;
    this.#withdrawCount = 0; // Reset the withdrawal counter
  }
  getBalance() {
    return this.#balance;
  }
  deposit(aAmount) {
    this.#balance += aAmount;
    console.log("Deposit of " + aAmount + " " + this.#currencyType + ", new balance is " + this.#balance + " " + this.#currencyType);
    this.#withdrawCount = 0; // Reset the withdrawal counter
  }
  withdraw(aAmount) {
    switch (this.#type) {
      case accountTypes.Savings:
        if (this.#withdrawCount >= 3) {
          console.log("You can't withdraw more than 3 times from a savings account!");
          return;
        }
        break;
      case accountTypes.Pension:
        console.log("You can't withdraw from a pension account!");
        return;
      default:
        break;
    }
    this.#balance -= aAmount;
    console.log("Withdraw of " + aAmount + " " + this.#currencyType + ", new balance is " + this.#balance + " " + this.#currencyType);
    this.#withdrawCount++;
  }
  setCurrencyType(aType) {
    if (this.#currencyType === aType) {
      console.log("Currency type is already " + aType);
      return;
    }
    console.log("Currency type is changed from " + this.#currencyType + " to " + aType);
    this.#currencyType = aType;
  }
}
// Create a constant instance of TAccountWithCurrency
const myAccountWithCurrency = new TAccountWithCurrency(accountTypes.Savings);
// Print the initial account type
printOut("myAccount = " + myAccountWithCurrency.toString());


printOut(newLine);
printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* 
Part 6: Currency Conversion (15 points)
Expand the account class with a private method that converts from one currency to another. Use this
method to change the balance when the currency changes. Replace all places where you print the balance
so that it has exactly 2 decimals.
// A method to covert from one currency to another
private convertCurrency(aAmount, aFromCurrency, aToCurrency) {
  // Conversion rates
  const conversionRates = {
    NOK: { SEK: 1.05, DKK: 0.14, EUR: 0.09 },
    SEK: { NOK: 0.95, DKK: 0.13, EUR: 0.08 },
    DKK: { NOK: 7.14, SEK: 7.69, EUR: 0.06 },
    EUR: { NOK: 11.11, SEK: 12.50, DKK: 16.67 }
  };
  return (aAmount * conversionRates[aFromCurrency][aToCurrency]).toFixed(2);
}
Change the currency a few times and try to get the output to look like this:
The account currently has change from Norske kroner to Svenske kroner
new balance is 153.87kr
The account currently has change from Svenske kroner to United States dollar
new balance is 16.40$
The account currently has change from United States dollar to Norske kroner
new balance is 150.00kr
*/

class TAccountWithCurrencyConversion {
  #type;
  #balance;
  #withdrawCount;
  #currencyType;

  constructor(aType) {
    this.#type = aType;
    this.#balance = 0;
    this.#withdrawCount = 0;
    this.#currencyType = currencyTypes.NOK; // Default currency type
  }

  toString() {
    return this.#type;
  }

  setType(aType) {
    console.log("Account is changed from " + this.#type + " to " + aType);
    this.#type = aType;
    this.#withdrawCount = 0; // Reset the withdrawal counter
  }

  getBalance() {
    return this.#balance.toFixed(2);
  }

  deposit(aAmount) {
    this.#balance += aAmount;
    console.log("Deposit of " + aAmount + " " + this.#currencyType + ", new balance is " + this.getBalance() + " " + this.#currencyType);
    this.#withdrawCount = 0; // Reset the withdrawal counter
  }

  withdraw(aAmount) {
    switch (this.#type) {
      case accountTypes.Savings:
        if (this.#withdrawCount >= 3) {
          console.log("You can't withdraw more than 3 times from a savings account!");
          return;
        }
        break;
      case accountTypes.Pension:
        console.log("You can't withdraw from a pension account!");
        return;
      default:
        break;
    }
    this.#balance -= aAmount;
    console.log("Withdraw of " + aAmount + " " + this.#currencyType + ", new balance is " + this.getBalance() + " " + this.#currencyType);
    this.#withdrawCount++;
  }

  setCurrencyType(aType) {
    if (this.#currencyType === aType) {
      console.log("Currency type is already " + aType);
      return;
    }
    console.log("Currency type is changed from " + this.#currencyType + " to " + aType);
    const convertedBalance = this.convertCurrency(this.#balance, this.#currencyType, aType);
    console.log("The account currently has change from " + this.#currencyType + " to " + aType);
    console.log("new balance is " + convertedBalance.toFixed(2) + aType);
    this.#balance = convertedBalance;
    this.#currencyType =
      aType;
  }
  convertCurrency(aAmount, aFromCurrency, aToCurrency) {
    // Conversion rates
    const conversionRates = {
      NOK: { SEK: 1.05, DKK: 0.14, EUR: 0.09 },
      SEK: { NOK: 0.95, DKK: 0.13, EUR: 0.08 },
      DKK: { NOK: 7.14, SEK: 7.69, EUR: 0.06 },
      EUR: { NOK: 11.11, SEK: 12.50, DKK: 16.67 }
    };
    return (aAmount * conversionRates[aFromCurrency][aToCurrency]);
  }
}
// Create a constant instance of TAccountWithCurrencyConversion
const myAccountWithCurrencyConversion = new TAccountWithCurrencyConversion(accountTypes.Savings);
// Print the initial account type
printOut("myAccount = " + myAccountWithCurrencyConversion.toString());


printOut(newLine);
printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* 
Part 7: Multi-Currency Transactions (15 points)
Modify the "deposit" and "withdraw" methods to take an additional parameter for the currency type. If no
currency type is specified (undefined), use NOK as the default. Make this change so that the functions
print out the currency the amount is in.


Deposit 12 USD and withdraw 10 GBP. Change the account currency a few times and withdraw the rest of
the balance with a different currency than the account is in. You should have a balance of exactly 0.00.
Try to print something like this:
*/


printOut(newLine);