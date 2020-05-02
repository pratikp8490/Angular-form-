import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  booking:any = [];
  constructor(public http:HttpClient,private router: Router) {}
  jsonapifile : any ;
  apifile:any;

  ngOnInit(): void {}
  logoutUser(){
    this.http.get(`http://localhost/wordpress/wp-json/custom-plugin/logout`)
    .subscribe(data => {
      this.jsonapifile = data
      localStorage.removeItem('ID');
    })
  }
  
  // showbooking(){
  //   let id = localStorage.getItem('ID');

  //   console.log("Id *************", id)

  //   let url = `http://localhost/wordpress/wp-json/custom-plugin/event?&log_id=` + id
        
  //   this.http.get(url)
  //   .subscribe(data => {
  //     // this.booking = data;
  //     this.booking.push(data);
  //     console.log("API Call",this.booking)
  //   },
  //     error => {
  //       console.log("Error", error);
  //     })

  // }
}