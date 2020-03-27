import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  arr = [];
  obj = {};

  constructor(private route : Router) { }

  ngOnInit() {
  }

  submitForm(form){
    console.log(form);
    if(JSON.parse(localStorage.getItem("signupData"))){
      this.arr = (JSON.parse(localStorage.getItem("signupData")));
    }
    
    this.arr.push(form)
    localStorage.setItem("signupData", JSON.stringify(this.arr));

    
    alert("Signup Successfully")
    this.route.navigate([""])
  console.log(form)
  }

  login(){
    this.route.navigate([""])
  }

}
