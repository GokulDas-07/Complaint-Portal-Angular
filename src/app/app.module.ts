import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddComplaintsComponent } from './add-complaints/add-complaints.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';
import { AdminNvabarComponent } from './admin-nvabar/admin-nvabar.component'
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    UserRegComponent,
    UserLoginComponent,
    UserProfileComponent,
    AddComplaintsComponent,
    UserNavbarComponent,
    ViewComplaintComponent,
    AdminNvabarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
