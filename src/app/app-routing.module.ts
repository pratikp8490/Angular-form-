import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { ActivateGuard } from './activate.guard';
import { ShowbookingComponent } from './showbooking/showbooking.component';

const routes: Routes = [
  { path: 'booking' ,component: BookingComponent,pathMatch: 'full',canActivate:[ActivateGuard]},
  { path: 'login', component: LoginComponent,pathMatch: 'full'},
  { path: 'showbooking', component:ShowbookingComponent,pathMatch:'full'},
  { path: 'home', component: HomeComponent, pathMatch: 'full',canActivate:[ActivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
