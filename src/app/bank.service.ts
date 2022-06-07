import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  bankService = "TEST";
  bankName = 'Bank of San Diego';
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
    balance: 0.01,
    currency: 'usd',
    transactions: [
      {
        date: '01-01-01',
        type: 'withdrawal',
        amount: 200.00,
        currency: 'usd'
      },
      {
        date: '02-02-02',
        type: 'deposit',
        amount: 100.00,
        currency: 'usd'
      },
      {
        date: '03-03-03',
        type: 'withdrawal',
        amount: 2.00,
        currency: 'usd'
      }
    ]
  };
  getBalance(){
    return this.account.balance;
  }
  

   withdraw(amount){
    if (amount < this.account.balance){
      this.account.balance -= amount;
    this.account.transactions.unshift({
      date: '03-03-02',
      type: 'withdraw',
      amount: amount,
      currency: 'usd'
    })
    } else {
      
    alert('Your account does not have enough money available to cover a payment');
    }
    
  }
  deposit(amount){
    this.account.balance += amount;
    this.account.transactions.unshift({
      date: '03-03-02',
      type: 'deposit',
      amount: amount,
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
