import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';


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

userapi:any;
  user: any;
  api: any;
  usremail: any;
  jsonapi:any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  }
  email: any;
  constructor(private http: HttpClient, private httpClient: HttpClient, private router: Router) { }

  sendMessage(message: any) {
    this.teacherMessageSource.next(message);
  }

  hideButton(hide: any) {
    this._hide.next(hide);
  }

  messageSend(message: any) {
    this.studentMessageSource.next(message);
  }
  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>('/home/');
  }
  loginUser(value) {
    return this.http.get(`http://localhost/wordpress/wp-json/custom-plugin/login?username=${value.username}&password=${value.password}`)
  }
  isAdminRights(): boolean {
    this.user = JSON.parse(localStorage.getItem('value'))
    console.log('this service user', this.user)
    console.log('this is user', this.user.username)
    if (this.user.username == "" || this.user.password == "") {
      return false;
    } else {
      return true;
    }
  }
  interceptorauth(): boolean {
    this.usremail = localStorage.getItem('user_email')
    console.log('user_email', this.usremail)
    if (this.usremail == null) {
      return false;
    } else {
      return true;
    }
  }

  show() {
    let uid = localStorage.getItem('ID');
    console.log("Id *************", uid)
    var headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpClient.get
      (`http://localhost/wordpress/wp-json/custom-plugin/event?pinged=${uid}`,
        { headers })
  }
  booking(value) {
    var email = localStorage.getItem('user_email');
    console.log("user_email id", email);
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')

    console.log('object value', value)
    var pinged = localStorage.getItem('ID');
    console.log(pinged);
    return this.httpClient.post(
      `http://localhost/wordpress/wp-json/custom-plugin/tickets`,
      `pinged=${pinged}&post_content=${value.post_content}&to_ping=${value.to_ping}&post_title=${value.post_title}&post_date=${value.post_date}
      &post_excerpt=${value.post_excerpt}&post_content_filtered=${value.post_content_filtered}&action=${'wp_posts'}`,
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
  signupbtn(value) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(`http://localhost/wordpress/wp-json/custom-plugin/signup`,
      `&user_login=${value.user_login}&user_email=${value.user_email}&user_pass=${value.user_pass}
    &user_nicename=${value.user_nicename}&action=${'wp_users'}`,
      { headers, responseType: 'text' })
  }

 cancled(id) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpClient.put(`http://localhost/wordpress/wp-json/custom-plugin/pending?ID=${id}`,
      { headers, responseType: 'text' })
  }
  emailuser(value){
  const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(`http://localhost/wordpress/wp-json/custom-plugin/emailpass?user_email=${value.user_email}`,
    { headers, responseType: 'text' })
  }

  changepass(value){
    this.jsonapi = `http://localhost/wordpress/wp-json/custom-plugin/forgot?user_email=${value.user_email}`
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    console.log('object ', value)
    return this.http.put(
      this.jsonapi,
      `&user_pass=${value.user_pass}`,
      { headers, responseType: 'text' }
    )
  }

  compare(value) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get(`http://localhost/wordpress/wp-json/custom-plugin/otpcompare?otp=${value.otp}`,
      { headers, responseType: 'text' })
  }
}

