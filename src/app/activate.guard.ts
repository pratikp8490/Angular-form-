import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  user:any;
  constructor(private service:ApiService , private router:Router) {
    // this.user = JSON.parse(localStorage.getItem('value'))
    // console.log('this is user name',this.user)
  }
    canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.service.isAdminRights()){
      return true;
    }else{
      alert("this not have permition");
      this.router.navigate(['login']);
    }
  }
  
}
