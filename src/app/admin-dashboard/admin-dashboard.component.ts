import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  constructor(private api:ApiService){
    api.viewAllComplaints().subscribe(
      (response:any)=>{
        console.log(response);
        this.data=response;
      }
    )
  }
  data:any=[]
  

}
