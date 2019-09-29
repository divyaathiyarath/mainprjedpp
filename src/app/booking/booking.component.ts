import { Component, OnInit } from '@angular/core';
import{ApiService} from '../api.service';
import { getViewData } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public user=localStorage.getItem('user');

  myData:Array<object>=[];
  constructor(private apiService:ApiService) { }

  ngOnInit() {
      
    this.getData();

  }
  getData()
  {
    this.apiService.getWorkingDays().subscribe((response:Array<object>)=>
    {
      if(response)
      {
         this.myData=response;
         
      }
    })
  }

  BookingFunc(data:any)
  {
   
    data.patient=this.user;
     this.apiService.Booking(data).subscribe((response)=>{
       console.log("Response"+response);
       if(response)
       {
        alert("Booking successfull");
       }
       else
       {
         alert("booking full");
       }
      
     })
  }

}
