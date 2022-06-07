import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


import { emailValidator } from './validators/form.validator';

export class User {
  name: string;
  email: string;
  message: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  // myForm: FormGroup;

  constructor(private router:Router) { }
  // onSubmit(){
  // alert(`this.myForm.value`);
  //   this.router.navigate([`/atm`]);
    
  // }
  user: User;
  submitted: boolean = false;   // check if the form is submitted
  ngOnInit() {
    this.user = {
      name: '',
      email: '',
      message: ''
    };
  }

  get diagnostic() {
    return JSON.stringify(this.user);
  }

  processForm() {
    console.log(this.user);
    this.submitted = true;
    alert(`Thanks for your submission! Your name is ${this.user.name} Your email is ${this.user.email} Your message is ${this.user.message} We appreciate it!`);
    this.router.navigate([`/atm`]);
    
  

}
}