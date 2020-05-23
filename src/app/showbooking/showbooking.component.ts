import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-showbooking',
  templateUrl: './showbooking.component.html',
  styleUrls: ['./showbooking.component.css']
})
export class ShowbookingComponent implements OnInit {

  booking: any = [];
  send_data: any;
  @Input() MSG: object;
  data: any = {}
  item: any = [];
  obj: any;
  isShow = false;
  isButtonVisible:boolean;
  @Output() redirect: EventEmitter<any> = new EventEmitter();
  confirmed: any =[];
  pending: any = [];
  canceled: any = [];
  btnDisabled = false;
  constructor(private http: HttpClient, private router: Router, private service: ApiService) {
    this.showbooking()
  }
  ngOnInit(): void {

  }

  showbooking() {
    this.service.show().subscribe((data) => {
      console.log('this is api response', data);
      this.booking = data

      this.booking.forEach((element) => {
        console.log("elements",element)
        if (element.post_status == 'confirmed') {
          this.confirmed.push(element)
          this.btnDisabled = true;
        } else if (element.post_status == 'Pending') {
          this.pending.push(element)
        } else if (element.post_status == 'canceled') {
          this.canceled.push(element)
          this.btnDisabled = true;
        }
      })

    });
  }

  update(item){
    this.isShow = !this.isShow
    this.isButtonVisible = true;
    console.log(" item ", item);
    this.service.sendMessage(item);
    this.service.hideButton(this.isShow);
    this.service.hideButton(this.isButtonVisible)
    localStorage.setItem('prmid', JSON.stringify(item.id));

    };
 
  delete(id) {
    console.log("Id ====>", id)  
    this.service.deletedata(id).subscribe(data =>
      {
        this.showbooking();
      }
    )
  }

  cancele(id){
    this.service.cancled(id).subscribe(data =>{
      console.log("Deleted",data);
    })
  }
}