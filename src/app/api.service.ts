import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  user:any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) {}
  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>('/home/');
  }
  loginUser(value){
    return this.httpClient.get('http://localhost/wordpress/wp-json/custom-plugin/login');
  } 
  isAdminRights():boolean{
    return true;
    }
  }