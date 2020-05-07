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
constructor(private router:Router,private httpClient: HttpClient, private service:ApiService, private formBuilder: FormBuilder) { 
   
  // console.log('router data', this.router.getCurrentNavigation().extras.state);
  // this.demo = this.router.getCurrentNavigation().extras.state;

  
  this.eventbooking = new FormGroup({
      id : new FormControl(''),
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
      post_title: ['', [Validators.required]],
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
    this.service.teacherMessage$
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
        console.log("POST Request is successful ",data);
        value.id = data
          console.log('this is prm id ====>', value.id);
          // localStorage.setItem('prmid', JSON.stringify(value.id));
          this.eventbooking.reset();
      },
      error  => {
        console.log("Error", error);   
        }         
    )   
  }

  updatedatanew(value){
    alert("Are you sure Update data");
    console.log("this is value",value);
    let prmid = JSON.parse(localStorage.getItem('prmid'));
    console.log("primary id",prmid);
    this.update = `http://localhost/wordpress/wp-json/custom-plugin/update?&prmid =${prmid}`
    console.log("ID",this.update)
    
    const headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.httpClient.put( this.update,`&post_title=${value.post_title}&mo_no=${value.mo_no}
    &email=${value.email}&eve_date=${value.eve_date}
    &eve_time=${value.eve_time}&post_content=${value.post_content}&address=${value.address}`, 
    {headers, responseType: 'text'}).subscribe((data) =>{
      console.log("updated record", value);
      data = value;
      console.log("********",data)
      value.id = data;
      localStorage.removeItem("prmid")
    })   
  }
}