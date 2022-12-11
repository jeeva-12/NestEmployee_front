import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {
  constructor(private api:ApiService){}
  ename=""
  ecode=""
  eemail=""
  emobile=""
  designation=""
  username=""
  password=""

  readvalue=()=>{
    let data:any={
      "ename":this.ename,
      "ecode":this.ecode,
      "eemail":this.eemail,
      "emobile":this.emobile,
      "designation":this.designation,
      "username":this.username,
      "password ":this.password 

    }
    this.api.addEmp(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          alert("Employee Added")
          
        }else{
          alert("Trouble to Add ")
        }
      }
    )
  }

}
