import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders } from '@angular/common/http';


export interface Todo {
  emp_first_name: string;
  emp_last_name: string;
  emp_address: string;
}
@Injectable({  providedIn: 'root',

})
export class ServiceService {

  private baseUrl = 'http://127.0.0.1:8000';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getDetails(): any{
     return this.http.get<Todo[]>( `${this.baseUrl}/details` , this.httpOptions);
  }
  login(): number{
    return 200;
  }
}




