import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  USER_NAME = '';
  PASS_WORD = '';
  constructor(  private route: Router, private serviceService: ServiceService ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {
    if (this.serviceService.login() === 200)
    {
      localStorage.setItem('user_name', this.USER_NAME);
      console.log(localStorage.getItem('user_name'));
      this.route.navigate(['/detail']);
    }
    else if (this.serviceService.login() === 500) {
      alert('You are not a user');
    }
  }

}
