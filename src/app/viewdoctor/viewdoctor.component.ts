import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-viewdoctor',
  templateUrl: './viewdoctor.component.html',
  styleUrls: ['./viewdoctor.component.css']
})
export class ViewdoctorComponent implements OnInit {

  docData:Array<object>=[];

  constructor(private apiService:ApiService) { }

  ngOnInit() {

    this.getData();
  }

  getData()
  {
    this.apiService.viewDoctorData().subscribe((response:Array<object>)=>{

      if(response)
      {
        console.log("Length="+response.length);
        this.docData=response;
      }
    })
  }

}
