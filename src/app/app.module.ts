import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ErrorComponent } from './error/error.component';
import { List2Component } from './list2/list2.component';
import { List3Component } from './list3/list3.component';
import { Detail1Component } from './detail1/detail1.component';
import { Detail2Component } from './detail2/detail2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ErrorComponent,
    List2Component,
    List3Component,
    Detail1Component,
    Detail2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
