import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

   mailid:any;

  constructor(private apiService:ApiService,private router:Router) { }

  // selectedFile:File=null;

  // onFileSelected(event)
  // {
  //   console.log(event);
  //   this.selectedFile=<File>event.target.files[0];
  //   console.log(this.selectedFile);

   
  // }

  ngOnInit() {
      
     status=localStorage.getItem('loggedIn');
     if(status==null)
     {
       this.router.navigateByUrl('');
     }

  }

  onSubmit(data:NgForm)
  {
    // console.log(data.value);
   
    this.apiService.getDoctorData(data.value).subscribe((response)=>{
   
      if(response)
      {
        alert("Registered successfully");
      }
    })

  }

  validFunction(data:NgForm)
  {
    this.apiService.checkMail(data.value).subscribe((response)=>{
    
      if(response[0]!=null)
      {
        alert("Mail id already exist");
        this.mailid=" ";
      }
    })
  }

}
