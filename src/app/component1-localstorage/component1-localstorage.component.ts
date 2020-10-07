import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-component1-localstorage',
  templateUrl: './component1-localstorage.component.html',
  styleUrls: ['./component1-localstorage.component.css']
})
export class Component1LocalstorageComponent implements OnInit {

  constructor(private router:Router) { }
send(){
  localStorage.setItem('message', "Msg through local storage");
this.router.navigate(['Component2-Localstorage'])
}
  ngOnInit(): void {
  }

}
