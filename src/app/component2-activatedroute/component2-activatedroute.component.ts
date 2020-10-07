import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-component2-activatedroute',
  templateUrl: './component2-activatedroute.component.html',
  styleUrls: ['./component2-activatedroute.component.css']
})
export class Component2ActivatedrouteComponent implements OnInit {
  message: any;

  constructor(private route:ActivatedRoute) {
    this.route.queryParams

    .subscribe(params => {
      console.log(params);
      this.message= params.message;
    })
   }

  ngOnInit(): void {
  }

}
