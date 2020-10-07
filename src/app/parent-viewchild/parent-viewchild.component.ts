import { Component, OnInit, ViewChild, AfterViewInit ,} from '@angular/core';
import { ChildViewchildComponent } from "../child-viewchild/child-viewchild.component";
@Component({
  selector: 'app-parent-viewchild',
  templateUrl: './parent-viewchild.component.html',
  styleUrls: ['./parent-viewchild.component.css']
})
export class ParentViewchildComponent implements AfterViewInit {

  @ViewChild(ChildViewchildComponent) child;

  constructor() { }

  message:string;

  ngAfterViewInit() {
    console.log(this.child.message)
    if(this.child.message){
      this.message = this.child.message
    }
   
  }
  ngOnInit(): void {
  }

}
