import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { state } from '@angular/animations';


@Component({
  selector: 'app-showbooking',
  templateUrl: './showbooking.component.html',
  styleUrls: ['./showbooking.component.css']
})
export class ShowbookingComponent implements OnInit {
booking: any = [];
send_data:any;
@Input() MSG : object ;
data:any = {}
item:any = [] ;
obj:any;
// @Output() send = new EventEmitter<object>();
@Output() redirect:EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient, private router:Router,private service:ApiService) { 
    this.showbooking()
  }
  ngOnInit(): void {
    
  }

showbooking() {
  this.service.show().subscribe((data)=>{
        console.log('this is api response',data);
        this.booking = data 
        // this.booking.push(data);
      });
}


update(item){
  console.log(" ********** item ********** ", item)
  console.log("this is id",item.id)
  localStorage.setItem('prmid', JSON.stringify(item.id))
  this.service.sendMessage(item);
}
delete(item){
  console.log("this is sdeleted data", item)
  console.log("this is id",item.id)
  // localStorage.setItem('dltprmid', JSON.stringify(item.id))
  // this.item.splice(i,1);
  // console.log("deleted data",this.item)
  this.service.removeitem(item).subscribe((data)=>{
    console.log("Record deleted successfully",data);
  })
}
}