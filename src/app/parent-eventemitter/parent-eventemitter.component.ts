import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-parent-eventemitter',
  templateUrl: './parent-eventemitter.component.html',
  styleUrls: ['./parent-eventemitter.component.css']
})
export class ParentEventemitterComponent implements OnInit {

  constructor() { }
  message:string;

  receiveMessage($event) {
    this.message = $event
  }
  ngOnInit(): void {
  }

}
