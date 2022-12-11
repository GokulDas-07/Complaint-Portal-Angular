import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  userRegistration=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8000/user",dataToSend)
  }

  userLogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8000/userlogin",dataToSend)
  }

  getProfile=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8000/userinfo",dataToSend)
  }

  addComplaint=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8000/addcomplaint",dataToSend)
  }

  viewComplaint=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8000/viewcomplaint",dataToSend)
  }

  viewAllComplaints=()=>
  {
    return this.http.get("http://localhost:8000/viewallcomplaints")
  }

}
