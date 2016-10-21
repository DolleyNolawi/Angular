import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { CalcPricePipe }  from './calcprice.pipe'
import {HeroBirthdayComponent} from './hero-birthday1.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent , CalcPricePipe, HeroBirthdayComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
