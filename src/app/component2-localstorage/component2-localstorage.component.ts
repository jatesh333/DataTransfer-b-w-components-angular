import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2-localstorage',
  templateUrl: './component2-localstorage.component.html',
  styleUrls: ['./component2-localstorage.component.css']
})
export class Component2LocalstorageComponent implements OnInit {
  message: string;

  constructor() { 
    this.message=  localStorage.getItem('message');
  }

  ngOnInit(): void {
  }

}
