import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-eventemitter',
  templateUrl: './child-eventemitter.component.html',
  styleUrls: ['./child-eventemitter.component.css']
})
export class ChildEventemitterComponent implements OnInit {

  message: string = "Hola Mundo!"

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }
  ngOnInit(): void {
  }

}
