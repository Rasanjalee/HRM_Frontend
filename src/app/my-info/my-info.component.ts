import { Component, OnInit } from '@angular/core';
import {ServiceService, Todo} from '../service.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {
  FIRST_NAME = 'John';
  LAST_NAME = 'Smith';
  Address = 'No.4/3,Allne Road,Malayasia' ;
  data: any;

  constructor( private serviceService: ServiceService) { }

  ngOnInit(): void {
   this.getDetail();
  }

  getDetail(): void{

    this.serviceService.getDetails().subscribe( data => {
      this.data = data;
      this.FIRST_NAME = this.data.emp_first_name;
      this.LAST_NAME = this.data.emp_last_name;
      this.Address = this.data.emp_address;
    });
  }
}
