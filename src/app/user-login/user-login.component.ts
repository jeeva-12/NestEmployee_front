import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private api:ApiService,private route: Router){}

  username=""
  password=""

  readvalue=()=>{
    let data:any={
      "username":this.username,
      "password":this.password
    }
    this.api.userLogin(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          alert("valid")
          localStorage.setItem('userInfo',response.userId)
          this.username=""
          this.password=""
          this.route.navigate(["/viewTask"])
        }else{
          alert( "Invalid")
        }
      }
    )
  }

}
