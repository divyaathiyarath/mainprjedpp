import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-editdoctor',
  templateUrl: './editdoctor.component.html',
  styleUrls: ['./editdoctor.component.css']
})
export class EditdoctorComponent implements OnInit {

 myData:Array<object>=[];

  constructor(private apiService:ApiService) { }

  ngOnInit() {

    this.getData();
  }

   getData()
   {
     this.apiService.viewDoctorData().subscribe((response:Array<object>)=>{

           if(response)
           {
             this.myData=response;
           }

     })
   }

   onSubmit()
   {
     this.apiService.updateDoctor(this.myData).subscribe((response)=>{
       if(response)
       {
         alert("Successfully updated");
       }
     })
   }

}
