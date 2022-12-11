import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NavComponent } from './nav/nav.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"userLogin",
    component:UserLoginComponent
  },
  {
    path:"addEmp",
    component:AddEmpComponent
  },
  {
    path:"addTask",
    component:AddTaskComponent
  },
  {
    path:"viewEmp",
    component:ViewEmpComponent
  },
  {
    path:"viewTask",
    component:ViewTaskComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    AddTaskComponent,
    AdminLoginComponent,
    NavComponent,
    UserLoginComponent,
    ViewEmpComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
