import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patientnav',
  templateUrl: './patientnav.component.html',
  styleUrls: ['./patientnav.component.css']
})
export class PatientnavComponent implements OnInit {

  public user=localStorage.getItem('user');

  constructor(private router:Router) { }

  navClick()
  {
    localStorage.removeItem('loggedIn');
    this.router.navigateByUrl('');
  }

  ngOnInit() {

    

  }

}
