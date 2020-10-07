import { Component, OnInit } from '@angular/core';
import { DataService } from "../service.service";
@Component({
  selector: 'app-sibiling2',
  templateUrl: './sibiling2.component.html',
  styleUrls: ['./sibiling2.component.css']
})
export class Sibiling2Component implements OnInit {
  message:string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
 
}
