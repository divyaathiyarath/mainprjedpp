import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {NgForm} from '@angular/forms';
  import { from } from 'rxjs';
import { getViewData } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-editpatient',
  templateUrl: './editpatient.component.html',
  styleUrls: ['./editpatient.component.css']
})
export class EditpatientComponent implements OnInit {

   myData:Array<object>=[];
  constructor(private apiService:ApiService) { }

  ngOnInit() {

    this.getData();

  }
  getData()
  {
     this.apiService.getPatientData().subscribe((response:Array<object>)=>{
       if(response)
       {
          
        this.myData=response;

       }
     })
  }

  onSubmit()
  {

     // console.log("onsubmit"+this.myData[0]);

    this.apiService.updatePatient(this.myData).subscribe((response)=>{
       
      if(response)
      {
        alert("Successfully updated");
      }

    })

  }
 
}
