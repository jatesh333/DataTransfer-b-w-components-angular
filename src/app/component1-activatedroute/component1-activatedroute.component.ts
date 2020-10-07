import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-component1-activatedroute',
  templateUrl: './component1-activatedroute.component.html',
  styleUrls: ['./component1-activatedroute.component.css']
})
export class Component1ActivatedrouteComponent implements OnInit {

  constructor(private router:Router) { }
send(){
  this.router.navigate(['Component2-Activatedroute'], { queryParams: { message:"Msg through QueryParams" } });
}
  ngOnInit(): void {
  }

}
