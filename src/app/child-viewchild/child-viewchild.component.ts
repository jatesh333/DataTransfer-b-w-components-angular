import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-viewchild',
  templateUrl: './child-viewchild.component.html',
  styleUrls: ['./child-viewchild.component.css']
})
export class ChildViewchildComponent implements OnInit {
  message: string = "message from child";

  constructor() { }
  transfer(){
   this.message = "message from child"
  }
  ngOnInit(): void {
  }

}
