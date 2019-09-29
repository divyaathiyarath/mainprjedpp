import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-workingdays',
  templateUrl: './workingdays.component.html',
  styleUrls: ['./workingdays.component.css']
})
export class WorkingdaysComponent implements OnInit {

  public user=localStorage.getItem('user');
  

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  onSubmit(data:NgForm)
  {
   // console.log(this.user);
    console.log(data.value.doctor);
  
    this.apiService.addWdays(data.value).subscribe((response)=>{
      
      if(response)
      {
        alert("Successfully added");
      }

    })


  }

}
