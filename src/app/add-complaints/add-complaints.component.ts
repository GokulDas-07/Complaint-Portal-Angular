import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-complaints',
  templateUrl: './add-complaints.component.html',
  styleUrls: ['./add-complaints.component.css']
})
export class AddComplaintsComponent {
  complaint=""
  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"userId":localStorage.getItem("userInfo"),"complaint":this.complaint}
    this.api.addComplaint(data).subscribe(
      (response:any)=>{
        console.log(response)
        alert("Complaint Registered")
        this.complaint=""
      }
    )
  }
}
