import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {
eventbooking:FormGroup;
submitted = false;
jsonapi:any;
postData: any;
json;
data = [];
constructor(private router:Router,private httpClient: HttpClient, private service:ApiService, private formBuilder: FormBuilder) { 
    this.eventbooking = new FormGroup({
      post_title : new FormControl(''),
      mo_no : new FormControl(''),
      email: new FormControl(''),
      eve_date: new FormControl(''),
      eve_time: new FormControl(''),
      post_content: new FormControl(''),
      address: new FormControl(''),
      action : new FormControl('wp_posts')
    });
  }

  ngOnInit(): void {
    this.eventbooking = this.formBuilder.group({
      post_title: ['', [Validators.required , Validators.pattern("^[a-z]$")]],
      mo_no: ['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
      email: ['', Validators.compose([
        Validators.required,Validators.email, 
        Validators.pattern('^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      eve_date: ['', Validators.required],
      eve_time: ['', Validators.required],
      post_content: ['', Validators.required],
      address: ['', [Validators.required,Validators.maxLength(250), Validators.minLength(10)]],
  })
  }
  get f() { return this.eventbooking.controls; } 
  onSubmit() {
    this.submitted = true;
    if (this.eventbooking.valid) 
    {
        return;
    }
}
  eventbook(value) {
    this.jsonapi = `http://localhost/wordpress/wp-json/custom-plugin/tickets`
    const headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    
    return this.httpClient.post(
      this.jsonapi,
      `post_title=${value.post_title}&mo_no=${value.mo_no}&email=${value.email}&eve_date=${value.eve_date}
      &eve_time=${value.eve_time}&post_content=${value.post_content}&address=${value.address}
      &action=${'wp_posts'}`,
      {headers , responseType: 'text'})
      .subscribe(
      data => {
        this.data.push(data);
        console.log("POST Request is successful ",data);
      },
      error  => {
        console.log("Error", error);   
        }        
    )   
  } 
}