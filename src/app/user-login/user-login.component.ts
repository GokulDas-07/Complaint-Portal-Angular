import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  mail=""
  password=""

  constructor(private api:ApiService,private route:Router){}

  readValues=()=>
  {
    let data:any={"mail":this.mail,"password":this.password}
    
    this.api.userLogin(data).subscribe(
      (response:any)=>{
        this.mail=""
      this.password=""
      if(response.status=="success"){
        let Userid= response.userId
        console.log(Userid)
        localStorage.setItem("userInfo",Userid)
        this.route.navigate(['/userprofile'])
      }else{
        alert(response.message)
      }
      }
    )
  }

}
