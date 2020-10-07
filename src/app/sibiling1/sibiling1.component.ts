import { Component, OnInit } from '@angular/core';
import { DataService } from "../service.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-sibiling1',
  templateUrl: './sibiling1.component.html',
  styleUrls: ['./sibiling1.component.css']
})
export class Sibiling1Component implements OnInit {

  message:string;

  constructor(private data: DataService , private router:Router) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling1");
    this.router.navigate(['Sibiling2'])
  }

}
