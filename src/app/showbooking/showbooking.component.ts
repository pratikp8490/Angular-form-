import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-showbooking',
  templateUrl: './showbooking.component.html',
  styleUrls: ['./showbooking.component.css']
})
export class ShowbookingComponent implements OnInit {
booking:any = [];
list:any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
showbooking() {
    let id = localStorage.getItem('ID');
    console.log("Id *************", id)
  const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  return this.http.get
    (`http://localhost/wordpress/wp-json/custom-plugin/event?log_id=${id}`,
      { headers, responseType: 'text' }).subscribe((data)=>{
        console.log('this is api response',data);
        this.booking.push(data);
      });
}
}