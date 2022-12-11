import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.css']
})
export class ViewComplaintComponent {
  userId:any=""

constructor(private api:ApiService){
  this.userId=localStorage.getItem("userInfo")
  let data:any={"userId":this.userId}

api.viewComplaint(data).subscribe(
  (response:any)=>{
    console.log(this.userId);
    this.myComplaint=response
  }
)

}


myComplaint:any=[]


}