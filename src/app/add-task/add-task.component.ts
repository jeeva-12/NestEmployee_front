import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor(private api:ApiService,private route:Router){}
  title=""
  description=""
  empId=""

  readvalues=()=>{
    let data:any={
      "title":this.title,
      "description":this.description,
      "empId":this.empId
    }
    this.api.AddTask(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          alert("Task Added")
          this.route.navigate(["/viewEmp"])
        }else{
          alert("Trouble to add")
        }
      }
    )
  }
 
}

