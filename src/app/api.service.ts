import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private teacherMessageSource = new Subject<any>();

  teacherMessage$ = this.teacherMessageSource.asObservable();

  private studentMessageSource = new Subject<any>();

  studentMessage$ = this.studentMessageSource.asObservable();
  
  private _hide = new Subject<any>();
  hide$ = this._hide.asObservable();

  
  user: any;
  api: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  }
  email: any;
  constructor(private http: HttpClient, private httpClient: HttpClient) { }

  sendMessage(message: any) {
    this.teacherMessageSource.next(message);
  }

  hideButton(hide : any){
    this._hide.next(hide);
  }

  messageSend(message: any) {
    this.studentMessageSource.next(message);
  }
  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>('/home/');
  }
  loginUser(value) {
    return this.httpClient.get('http://localhost/wordpress/wp-json/custom-plugin/login');
  }
  isAdminRights(): boolean {
    return true;
  }

  show() {
    let uid = localStorage.getItem('ID');
    console.log("Id *************", uid)

  
    var headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    // const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.httpClient.get
      (`http://localhost/wordpress/wp-json/custom-plugin/event?log_id=${uid}`,
        { headers })
  }
  booking(value) {
    var email= localStorage.getItem('user_email');
    console.log("user_email id",email);
    const headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
   
    console.log('object value', value)
    var log_id = localStorage.getItem('ID');
    console.log(log_id);
    return this.httpClient.post(
      `http://localhost/wordpress/wp-json/custom-plugin/tickets`,
      `&log_id=${log_id}&post_title=${value.post_title}&mo_no=${value.mo_no}&email=${value.email}&eve_date=${value.eve_date}
      &eve_time=${value.eve_time}&post_content=${value.post_content}&address=${value.address}
      &action=${'wp_posts'}`,
      { headers })
  }
  updatedata() {
    let prmid = JSON.parse(localStorage.getItem('prmid'));
    console.log("primary id", prmid);
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpClient.put(`http://localhost/wordpress/wp-json/custom-plugin/update?&prmid =${prmid}`,
      { headers, responseType: 'json' })
  }
  deletedata(id) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.delete(`http://localhost/wordpress/wp-json/custom-plugin/delete?ID=${id}`,
      { headers, responseType: 'text' })
  }
  signupbtn(value){
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(`http://localhost/wordpress/wp-json/custom-plugin/signup`,
    `&user_login=${value.user_login}&user_email=${value.user_email}&user_pass=${value.user_pass}
    &user_nicename=${value.user_nicename}&action=${'wp_users'}`,
    { headers , responseType: 'text' })
  }
}