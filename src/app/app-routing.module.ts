import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { ActivateGuard } from './activate.guard';
import { ActiveGuard } from './active.guard';
import { ShowbookingComponent } from './showbooking/showbooking.component';
import { NewcustomeruserComponent } from './newcustomeruser/newcustomeruser.component'
import { ForgotComponent } from './forgot/forgot.component';


const routes: Routes = [
  { path: 'booking' ,component: BookingComponent,pathMatch: 'full',canActivate:[ActiveGuard]},
  { path: 'edit/:id' ,component: BookingComponent,pathMatch: 'full',canActivate:[ActiveGuard]},
  { path: 'login', component: LoginComponent,pathMatch: 'full'},
  { path: 'showbooking', component:ShowbookingComponent,pathMatch:'full',canActivate:[ActiveGuard]},
  { path: 'home', component: HomeComponent, pathMatch: 'full',canActivate:[ActivateGuard]},
  { path: 'newcustomeruser', component: NewcustomeruserComponent, pathMatch: 'full'},
  { path: 'forgot', component: ForgotComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
