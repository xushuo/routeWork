import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit {

  private listid:number;
  private id:number;
  private name:string;
  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
  //this.listid=this.routeInfo.snapshot.params['id'];//参数快照
  this.routeInfo.params.subscribe((params: Params) => this.listid=params['id']);//参数订阅
    this.routeInfo.data.subscribe((data:{product:Product})=>{
      this.id=data.product.id;
      this.name=data.product.name;
    })
  }

}

export class Product{
  constructor(public id:number,public name:string){
  }
}
