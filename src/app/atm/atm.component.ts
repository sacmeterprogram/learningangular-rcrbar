import { Component, OnInit, Input } from '@angular/core';
import { BankService } from '../bank.service';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit{
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
  // onWithdraw(){
  //   if (balance > 0){
  //   this.bankService.withdraw(this.numberNew);
  //   this.balance = this.bankService.getBalance();
  //   } else {
      
  //   alert('Your account does not have enough money available to cover a payment');
  //   }
  // }
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
