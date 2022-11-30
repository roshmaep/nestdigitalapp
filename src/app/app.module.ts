import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpregComponent } from './empreg/empreg.component';
import { AdminComponent } from './admin/admin.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { FormsModule } from '@angular/forms';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { ViewfriendComponent } from './viewfriend/viewfriend.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { NavbaremployeeComponent } from './navbaremployee/navbaremployee.component';
const myRoute:Routes=[
  {
    path:"",
    component:HomeComponent
    

  },
  {
    path:"gallery",
    component:GalleryComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
     path:"contact",
     component:ContactComponent
  },{
    path:"admin",
    component:AdminComponent
  },{
    path:"employee",
    component:EmployeeComponent
  },
  {
    path:"reg",
    component:EmpregComponent
  },{
    path:"addc",
    component:AddcourseComponent
  },
  {
    path:"addf",
    component:AddfriendComponent
  },{
    path:"viewc",
    component:ViewcourseComponent
  },
  {
    path:"viewf",
    component:ViewfriendComponent
  },
  {
    path:"navadmin",
    component:NavbaradminComponent
  },
  {
    path:"navemployee",
    component:NavbaremployeeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    ContactComponent,
    AboutComponent,
    EmployeeComponent,
    EmpregComponent,
    AdminComponent,
    AddcourseComponent,
    AddfriendComponent,
    ViewcourseComponent,
    ViewfriendComponent,
    NavbarComponent,
    NavbaradminComponent,
    NavbaremployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
