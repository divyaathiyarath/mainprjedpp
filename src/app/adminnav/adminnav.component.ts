import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css']
})
export class AdminnavComponent implements OnInit {

   user=localStorage.getItem('user');

  constructor(private router:Router) { }
  navClick()
  {
    localStorage.removeItem('loggedIn');
    this.router.navigateByUrl('');
  }

  ngOnInit() {
  }

}
