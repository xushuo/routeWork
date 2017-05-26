import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Product} from "../list2/list2.component";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
/**
 * Created by Administrator on 2017/5/26.
 */
@Injectable()
export class ProductResolve implements Resolve<Product> {
  constructor(private router: Router) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product {
    let Listid: number = route.params["id"];
    if (Listid == 2222) {
      console.log("true:"+Listid);
      return new Product(1234, "ip123412131")
    } else {
      console.log("false:"+Listid);
      this.router.navigate(['/home']);
      return undefined;
    }
  }
}
