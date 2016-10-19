import { Component } from '@angular/core';
@Component({
  selector: 'click-me',
  template: `
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
    
    <input #enter (keyup.enter) = "values=enter.value"/>
    <p>{{values}}</p>
    
    <input #box1 (keyup)="onKey(box1.value)">
    <p>{{values1}}</p>
    
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}`
})
export class AppComponent {
  clickMessage = '';
  values = '' ;
  values1 = '' ;

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }


  onKey(value: string) {
    this.values1 += value + ' | ';
  }
}
