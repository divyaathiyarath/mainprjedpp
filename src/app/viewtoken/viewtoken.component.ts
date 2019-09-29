import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-viewtoken',
  templateUrl: './viewtoken.component.html',
  styleUrls: ['./viewtoken.component.css']
})
export class ViewtokenComponent implements OnInit {

   patient=localStorage.getItem('user');

   myData:Array<object>=[];

  constructor(private apiService:ApiService) { }

  ngOnInit() {

    this.getData();
  }
  getData()
  {
    this.apiService.readToken(this.patient).subscribe((response:Array<object>)=>{
      if(response)
      {
        this.myData=response;
      }
    })
  }

}
