import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentInputComponent } from './parent-input/parent-input.component';
import { ChildInputComponent } from './child-input/child-input.component';
import { ParentViewchildComponent } from './parent-viewchild/parent-viewchild.component';
import { ChildViewchildComponent } from './child-viewchild/child-viewchild.component';
import { ParentEventemitterComponent } from './parent-eventemitter/parent-eventemitter.component';
import { ChildEventemitterComponent } from './child-eventemitter/child-eventemitter.component';
import { Sibiling1Component } from './sibiling1/sibiling1.component';
import { Sibiling2Component } from './sibiling2/sibiling2.component';
import { HomeComponent } from './home/home.component';
import { Component1LocalstorageComponent } from './component1-localstorage/component1-localstorage.component';
import { Component2LocalstorageComponent } from './component2-localstorage/component2-localstorage.component';
import { Component1ActivatedrouteComponent } from './component1-activatedroute/component1-activatedroute.component';
import { Component2ActivatedrouteComponent } from './component2-activatedroute/component2-activatedroute.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'Parent-Input' ,component:ParentInputComponent},
  {path:'Parent-Viewchild' ,component:ParentViewchildComponent},
  {path:'Parent-Eventemitter' ,component:ParentEventemitterComponent},
  {path:'Parent-Service' ,component:Sibiling1Component},
  {path:'Sibiling2' ,component:Sibiling2Component},
  {path:'Component1-Localstorage' ,component:Component1LocalstorageComponent},
  {path:'Component2-Localstorage' ,component:Component2LocalstorageComponent},
  {path:'Component1-Activatedroute' ,component:Component1ActivatedrouteComponent},
  {path:'Component2-Activatedroute' ,component:Component2ActivatedrouteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
