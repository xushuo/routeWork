import {CanActivate} from "@angular/router";
/**
 * Created by Administrator on 2017/5/26.
 */
export class  LoginGuard implements CanActivate{
  canActivate(){
    let logined:boolean = Math.random()<0.5;
    if(!logined){
      console.log("用户未登录");
    }else {
      console.log("用户已登录")
    }
    return logined;
  }
}
