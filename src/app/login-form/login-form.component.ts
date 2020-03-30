import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  accountLogin = false;

  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  signup() {
    this.route.navigate(["signup/"+null])
  }

  loginCheck(loginData) {
    this.http.get('http://localhost:3000/users').subscribe(

      (response: any) => {
        console.log(response);
        let find = response.find(u => u.email == loginData.userName && u.password == loginData.password)
        if (find) {
          this.route.navigate(["dashboard"])
        }else{
          alert("Nohhhhh! ")
        }

      }, error => {
        console.log(error);
      }

    )

    // let data = JSON.parse(localStorage.getItem("signupData"));

    // let find = data.find((v, i) => { 
    //         if (v.userName == loginData.userName && v.password == loginData.password) {
    //           alert("Login Successfully")
    //           return true;
    //          } })

    // if(find){
    //   this.route.navigate(["dashboard"])
    // }

  }

}
