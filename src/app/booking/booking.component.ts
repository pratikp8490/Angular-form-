import { Component, OnInit, Output,EventEmitter } from '@angular/core';
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
myForm;
demo:any;
obj:any = [];
update:any;
prmid:any;
obj1:any;
isShow :boolean = false;
isButtonVisible:boolean;
constructor(private router:Router,private httpClient: HttpClient, private service:ApiService, private formBuilder: FormBuilder) { 
   
  // console.log('router data', this.router.getCurrentNavigation().extras.state);
  // this.demo = this.router.getCurrentNavigation().extras.state;

  
  this.eventbooking = new FormGroup({
    id: new FormControl(''),
    post_title: new FormControl(''),//name
    to_ping: new FormControl(''),//mo
    post_content: new FormControl(''),//email
    post_date: new FormControl(''),//date
    post_excerpt: new FormControl(''),//service
    // address: new FormControl(''),//address
    post_content_filtered:new FormControl(''),
    action: new FormControl('wp_posts')}); 
  }

  ngOnInit(): void {

    this.service.teacherMessage$ .subscribe(message => {
      console.log("this is message",message);
      this.obj = message;
      console.log("msg",this.obj)
      console.log("msssg",this.obj.post_title);
      // console.log('name',this.demo[0].name)
      // this.obj = this.demo[0];
      // console.log('this is object form data',this.obj)
    })
    
    this.eventbooking = this.formBuilder.group({
      post_title: ['', Validators.required],                                  //name
      to_ping: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],  //mobie no
      post_content: ['', Validators.compose([
        Validators.required, Validators.email,
        Validators.pattern('^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],                                                                      //email
      post_date: ['', Validators.required],                                     //date
      post_excerpt: ['', Validators.required],                                  //service
      post_content_filtered: ['', [Validators.required,
      Validators.maxLength(100)]],
  })
    this.service.hide$
     .subscribe(
       hide =>{
         console.log('this is bool value', hide)
         this.isShow = hide;
         this.isButtonVisible = true;
       }
     ) 
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

     this.service.booking(value).subscribe(
      data => {
        this.data.push(value);
        this.obj1 = data
        console.log("POST Request is successful ",this.obj1);
        value.id = this.obj1
          console.log('this is prm id ====>', value.id);
          // localStorage.setItem('prmid', JSON.stringify(value.id));
          this.eventbooking.reset();
      },
      errors  => {
        console.log("Error", errors);   
        }         
    )   
  }

  updatedatanew(value){
    alert("Are you sure Update data");
    console.log("this is value",value.id);
     this.prmid = JSON.parse(localStorage.getItem('prmid'));
    console.log("primary id",this.prmid);
   
    this.update = `http://localhost/wordpress/wp-json/custom-plugin/update?ID=${this.prmid}`
    console.log("ID",this.update)
    
    const headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    
    return this.httpClient.put(this.update,`post_content=${value.post_content}
    &to_ping=${value.to_ping}&post_title=${value.post_title}&post_date=${value.post_date}
    &post_excerpt=${value.post_excerpt},&post_content_filtered=${value.post_content_filtered}`,
    {headers, responseType: 'text'}).subscribe((data) =>{
      console.log("this is new data",data)
      this.isShow = false     
      this.isButtonVisible = false;
      this.eventbooking.reset();
    })   
  }
}