import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListComponent} from "./list/list.component";
import {ErrorComponent} from "./error/error.component";
import {List2Component} from "./list2/list2.component";
import {Detail1Component} from "./detail1/detail1.component";
import {Detail2Component} from "./detail2/detail2.component";
import {List3Component} from "./list3/list3.component";

const routes: Routes = [
    {
      path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
    },{
    path:'chat',
    component: List3Component,
    outlet:'aux'
  },
    {
      path: 'list',
      component: ListComponent,
      children: [
        {
          path: '', component: Detail1Component
        },
        {
          path: 'update/:id', component: Detail2Component
        }
      ]
    }, {
      path: 'list2/:id',
      component: List2Component
    }, {
      path: '**',
      component: ErrorComponent
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
