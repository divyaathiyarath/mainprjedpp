import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  myData:Array<object>=[];
 pData:Array<object>=[];
 

  constructor(private apiService:ApiService) { }

  ngOnInit() {

    this.getData();

  }
  getData()
  {
    this.apiService.viewPatientData().subscribe((response:Array<object>)=>{
      if(response)
      {
         this.myData=response;
      }
    })
  }
  getPrescription(data:NgForm)
  {
    console.log("getPrescription");
  
    this.apiService.prescription(data.value).subscribe((response:Array<object>)=>{
      if(response)
      {
        console.log("prescription");
        //console.log(response);
        this.pData=response;
      

      }
    })
  }
  onSubmit(data:NgForm)
  {
    this.apiService.addPrescription(data.value).subscribe((response)=>{
      if(response)
      {
        alert("Successfully added");
      }
    })
  }

}
