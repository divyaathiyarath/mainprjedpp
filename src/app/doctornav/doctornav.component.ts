import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctornav',
  templateUrl: './doctornav.component.html',
  styleUrls: ['./doctornav.component.css']
})
export class DoctornavComponent implements OnInit {

 public user=localStorage.getItem('user');

  constructor(private router:Router) { }

  ngOnInit() {
   
  }

navClick()
{
  localStorage.removeItem('loggedIn');
  this.router.navigateByUrl('');
}

}
