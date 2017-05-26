import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private Productid :number;
  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.Productid=this.routeInfo.snapshot.queryParams['id'];
  }

}
