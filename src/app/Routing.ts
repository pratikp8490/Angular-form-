import { Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { ActivateGuard } from './activate.guard';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

export const Approutes : Routes =
[
    {path:'', component:LoginComponent},
    {path:'home',component:HomeComponent,canActivate:[ActivateGuard]},
    {path:'booking',component:BookingComponent} 
]