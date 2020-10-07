import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import{DataService} from './service.service';
@NgModule({
  declarations: [
    AppComponent,
    ParentInputComponent,
    ChildInputComponent,
    ParentViewchildComponent,
    ChildViewchildComponent,
    ParentEventemitterComponent,
    ChildEventemitterComponent,
    Sibiling1Component,
    Sibiling2Component,
    HomeComponent,
    Component1LocalstorageComponent,
    Component2LocalstorageComponent,
    Component1ActivatedrouteComponent,
    Component2ActivatedrouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
