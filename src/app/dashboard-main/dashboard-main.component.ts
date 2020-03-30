import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {

  users = [];

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit() {
      this.http.get("http://localhost:3000/users").subscribe(
        (response:any)=>{
            console.log("Hey all users",response);
            this.users = response;
        },error=>{
            console.log("hey error");
        }        

      )


  }

  editUser(id){
      this.route.navigate(["signup/",id])
  }

}
