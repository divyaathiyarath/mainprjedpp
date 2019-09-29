import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { getViewData } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent implements OnInit {

  myData:Array<object>=[];

  constructor(private apiService:ApiService) { }

  ngOnInit() {

    this.getData()
    

  }

  getData()
  {
   this.apiService.getBookingData().subscribe((response:Array<object>)=>{
     if(response)
     {
       this.myData=response;
     }
   })
  }
}
