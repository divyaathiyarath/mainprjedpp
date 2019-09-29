import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  myData:Array<object>=[];
  constructor(private apiService:ApiService,private router:Router) { }

  ngOnInit() {

    status=localStorage.getItem('loggedIn');
    if(status==null)
    {
      this.router.navigateByUrl('');
    }
    
    this.getData()  
  }

  getData()
  {
    this.apiService.viewDoctorData().subscribe((response:Array<object>)=>{

      this.myData=response;

    })
  }

}
