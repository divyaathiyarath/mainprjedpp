import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { getViewData } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-viewprescription',
  templateUrl: './viewprescription.component.html',
  styleUrls: ['./viewprescription.component.css']
})
export class ViewprescriptionComponent implements OnInit {

 myData:Array<object>=[];
 user=localStorage.getItem('user');

  constructor(private apiService:ApiService) { }

  ngOnInit() {

    this.getData();

  }
  getData()
  {
    console.log(this.user);

    this.apiService.viewPrescription(this.user).subscribe((response:Array<object>)=>{
     
      if(response)
      {
        this.myData=response;
      }

    })

  }

}
