import { Component, OnInit, Input } from '@angular/core';

import { BankService } from '../bank.service';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent implements OnInit{
  balance: number;
  amount: number = 100;
  @Input() numberNew: number = 1;

  
  constructor(public bankService: BankService) { 
    console.log(bankService);
  }
  
  onGetBalance(){
    this.balance = this.bankService.getBalance();
  }
  onDeposit(){
    this.bankService.deposit(this.numberNew);
    this.balance = this.bankService.getBalance();
  }
  onWithdraw(){
    this.bankService.withdraw(this.numberNew);
    this.balance = this.bankService.getBalance();
  
  }
  onGetTransactions(){
    this.bankService.account.getTransactions();
  }
 
  isShow: boolean  = false;
  changeShow(){
  this.isShow =  !this.isShow 
}

  ngOnInit() {}


}
