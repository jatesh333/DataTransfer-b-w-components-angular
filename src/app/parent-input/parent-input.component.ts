import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-input',
  templateUrl: './parent-input.component.html',
  styleUrls: ['./parent-input.component.css']
})
export class ParentInputComponent implements OnInit {
  parentMessage = ""
  constructor() { }
  transfer(){
    this.parentMessage = "message from parent"
  }
  ngOnInit(): void {
  }

}
