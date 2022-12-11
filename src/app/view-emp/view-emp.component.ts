import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent {
  ename=""
  constructor(private api:ApiService, private route:Router){
   
   
  }
  searchEmp=()=>{
    let data:any={
      "ename":this.ename
    }
    if(this.ename.length==0){
      this.searchData=[]

    }else{
      this.api.searchEmp(data).subscribe(
        (response:any)=>{
          if(response.length==0){
            this.searchData=[]
          }else{
            this.searchData=response
          }
        }
      )
      }  }
    
  
employeeData:any=[]
searchData:any=[]

}
