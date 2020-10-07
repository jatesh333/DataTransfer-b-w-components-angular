import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  concepts=[
    {header:"Parent to Child using @Input",router:"Parent-Input"},
    {header:"Child to Parent using @ViewChild",router:"Parent-Viewchild"},
    {header:"Child to Parent using EventEmitter and @output",router:"Parent-Eventemitter"},
    {header:"B/w two sibilings using service",router:"Parent-Service"},
    {header:"B/w any component using Local Storage",router:"Component1-Localstorage"},
    {header:"B/w components while routing using QueryParams",router:"Component1-Activatedroute"},
    
  ]
  // {path:'Input' ,component:ParentInputComponent},
  // {path:'Viewchild' ,component:ParentViewchildComponent},
  // {path:'Eventemitter' ,component:ParentEventemitterComponent},
  // {path:'Service' ,component:Sibiling1Component},
  constructor(private router : Router) { }
  routing(item){
    console.log(item)
    this.router.navigate([item.router]);
  }
  ngOnInit(): void {
  }

}
