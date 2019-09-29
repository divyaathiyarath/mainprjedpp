import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import{Router} from '@angular/router';
import { getViewData } from '@angular/core/src/render3/instructions';
import { from } from 'rxjs';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  myData:Array<object>=[];

  constructor(private apiService:ApiService,private router:Router) { }

  ngOnInit() {

    status=localStorage.getItem('loggedIn');
    if(status==null)
    {

       this.router.navigateByUrl('');

    }

   this.getData();
  }
  getData()
  {
    this.apiService.getPatientData().subscribe((response:Array<object>)=>{
      if(response)
      {
                this.myData=response;
                console.log(this.myData);
      }
    })
  }

}
