import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComplaintsComponent } from './add-complaints/add-complaints.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';

const routes: Routes = [
  {path:"",component:AdminLoginComponent},
  {path:"admindash",component:AdminDashboardComponent},
  {path:"userlogin",component:UserLoginComponent},
  {path:"userreg",component:UserRegComponent},
  {path:"userprofile",component:UserProfileComponent},
  {path:"addcomplaint",component:AddComplaintsComponent},
  {path:"viewcomplaint",component:ViewComplaintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
