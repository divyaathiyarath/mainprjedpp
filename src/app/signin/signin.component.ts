import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private apiService:ApiService,private router:Router) { }
onSubmit(data:NgForm)
{
  console.log(data.value);
    this.apiService.getLogData(data.value).subscribe((response)=>{
    if(response[0]!=null)
    {
      console.log("response");
    //  console.log(response[0].username);
      var username=response[0].username;
       localStorage.setItem('user',username);
       localStorage.setItem('loggedIn','true');
   //    console.log("Local storage"+localStorage.getItem('user'));
      if(response[0].utype=="patient")
      {
      //   window.location.href="/patient";
         
          this.router.navigateByUrl('patient');
       
      }
      if(response[0].utype=='admin')
      {
        this.router.navigateByUrl('admin');
      }

      if(response[0].utype=='doctor' || data.value.username=="admin@gmail.com" && data.value.password=="admin")
      {
        this.router.navigateByUrl('doctor');
      }
      
    }
    else
    {

      alert("Invalid username or password");
    }
  })


}



  ngOnInit() {
  }

}
