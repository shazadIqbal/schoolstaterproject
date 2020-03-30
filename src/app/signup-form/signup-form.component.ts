import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { user } from './user.model';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  arr = [];
  obj = {};
  user:user;
  constructor(private route : Router,private activedRoute:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
      let id = this.activedRoute.snapshot.params.id;
      console.log("hey id is here ",id);
      //line 1 
      // line 2 http ki call kr rhi ha , tb aye idhr jb reponse ayega 
      // line 3
      
      if(id && id!="null"){
                this.http.get("http://localhost:3000/users/"+id).subscribe(
                  (res:user)=>{
                      this.user = res;
                      console.log("Hey the user of id"+id+" is "+ this.user);
                  },error=>{
          
                  }
          
                )
      }else{
        this.user = new user();
      }
      

  }

  submitForm(form){
    console.log(form);
    let user = {
        username:form.userName,
        password:form.password,
        email:form.email,
        role:"ADMIN"

    }
    this.http.post("http://localhost:3000/users",user).subscribe(
      res=>{
        console.log(res);

      },error=>{
          console.log(error)

      }

    )

  //   if(JSON.parse(localStorage.getItem("signupData"))){
  //     this.arr = (JSON.parse(localStorage.getItem("signupData")));
  //   }
    
  //   this.arr.push(form)
  //   localStorage.setItem("signupData", JSON.stringify(this.arr));

    
  //   alert("Signup Successfully")
  //   this.route.navigate([""])
  // console.log(form)
  }

  login(){
    this.route.navigate([""])
  }

}
