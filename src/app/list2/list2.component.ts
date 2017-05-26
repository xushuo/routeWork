import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit {

  private listid:number;
  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
  //this.listid=this.routeInfo.snapshot.params['id'];//参数快照
  this.routeInfo.params.subscribe((params: Params) => this.listid=params['id']);//参数订阅
  }
}
