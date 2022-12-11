import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  userLogin=(data:any)=>
  {
    return this.http.post("http://localhost:8080/userLogin",data)
  }

  addEmp=(data:any)=>
  {
    return this.http.post("http://localhost:8080/addEmp",data)
  }

  getEmp=(data:any)=>
  {
    return this.http.post("http://localhost:8080/getEmp",data)
  }

  searchEmp=(data:any)=>
  {
    return this.http.post("http://localhost:8080/empsearch",data)
  }

  AddTask=(data:any)=>
  {
    return this.http.post("http://localhost:8080/addTask",data)
  }
  ViewTask=(data:any)=>
  {
    return this.http.post("http://localhost:8080/viewTask",data)
  }
  
}
