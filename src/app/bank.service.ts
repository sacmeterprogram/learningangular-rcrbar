import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  bankService = "TEST";
  bankName = 'Bank of Verisk';
  account: any = {
    fname: 'first name',
    lname: 'last name',
    age: 0,
    address: {
      street: '1234 street st',
      city: 'city',
      state: 'state',
      zip: 12345,
      country: 'canada'
    },
    balance: 302.00,
    balanceFormatted: "$302.00",
    currency: 'usd',
    transactions: [
      {
        date: '03/06/2022 11:50:51 AM ',
        type: 'deposit',
        amount: 200.00,
        amountFormatted: "$200.00",
        balance: 302.00,
        balanceFormatted: "$302.00",
        currency: 'usd'
      },
      {
        date: '02/06/2022 11:50:51 AM ',
        type: 'deposit',
        amount: 100.00,
        amountFormatted: "$100.00",
        balance: 102.00,
        balanceFormatted: "$102.00",
        currency: 'usd'
      },
      {
        date: '01/06/2022 11:50:51 AM ',
        type: 'withdrawal',
        amount: 2.00,
        amountFormatted: "$2.00",
        balance: 2.00,
        balanceFormatted: "$2.00",
        currency: 'usd'
      }
    ]
  };
  getBalance(){
    return this.account.balance;
  }

  getBalanceFormatted(){
    return this.account.balanceFormatted;
  }
  
  AddZero(num) {
    return (num >= 0 && num < 10) ? "0" + num : num + "";
  }

  getDateTime(){
    const now = new Date();
    const strDateTime = [[this.AddZero(now.getDate()), 
        this.AddZero(now.getMonth() + 1), 
        now.getFullYear()].join("/"), 
        [this.AddZero(now.getHours()), 
        this.AddZero(now.getMinutes()),
        this.AddZero(now.getSeconds())].join(":"), 
        now.getHours() >= 12 ? "PM" : "AM"].join(" ");
        return strDateTime;
    }

    formatAsCurrency(number){
      if (number < 0){
        return "("+Math.abs(number).toLocaleString('en-US', { style: 'currency', currency: 'USD' })+")";
      } else {
        return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }}
  


   withdraw(amount){
    /*
    If we were to prevent overdraws
    if (amount < this.account.balance){
      */
      this.account.balance -= amount;
      this.account.transactions.unshift({
      date: this.getDateTime(),
      type: 'withdraw',
      amount: amount,
      amountFormatted: this.formatAsCurrency(amount),
      balance: this.account.balance,
      balanceFormatted: this.formatAsCurrency(this.account.balance),
      currency: 'usd'
      });
    /*
    
    } else {
      
    alert('Your account does not have enough money available to cover a payment');
    }
    */
    
  }
  deposit(amount){
    this.account.balance += amount;
    this.account.transactions.unshift({
      date: this.getDateTime(),
      type: 'deposit',
      amount: amount,
      amountFormatted: this.formatAsCurrency(amount),
      balance: this.account.balance,
      balanceFormatted: this.formatAsCurrency(this.account.balance),
      currency: 'usd'
    })
    
  }
  getTransactions(){
    return this.account.transactions;
    
  }
  
 isShow: boolean  = false;
  changeShow(){
   this.isShow =  !this.isShow;
 }

  constructor() { }
}
