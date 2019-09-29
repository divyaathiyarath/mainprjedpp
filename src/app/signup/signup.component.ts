import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {NgForm} from '@angular/forms';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   mailid:any;

  onSubmit(data:NgForm)
  {

    this.apiService.getData(data.value).subscribe((response)=>{

      if(response)
      {
        alert("Registered successfully");
      }

    })
  }

  //check mail id 
  validFunction(data:NgForm)
  {
    // alert("valid function");
    // var mail=value;    
     console.log(data.value);
    this.apiService.checkMail(data.value).subscribe((response)=>{

      console.log("response");
      console.log(response[0]);
       
      if(response[0]!=null)
      {
        this.mailid=" ";
        alert("mail id already exist");
        
      }

    })
  }


  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

 
}
