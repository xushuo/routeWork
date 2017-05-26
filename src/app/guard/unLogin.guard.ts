import {CanDeactivate} from "@angular/router";
import {ListComponent} from "../list/list.component";
/**
 * Created by Administrator on 2017/5/26.
 */
export class UnLoginGuard implements CanDeactivate<ListComponent>{
  canDeactivate(component:ListComponent){
    return window.confirm("你还没保存，是否离开？");
  }
}
