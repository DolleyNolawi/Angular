import { Component } from '@angular/core';
import {Product} from "./product";
@Component({
  selector: 'my-app',
    template:`
  <h1>{{title}}</h1>
  <h2>{{product.name}} details!</h2>
  <div><label>id: </label>{{product.id}}</div>
  <div>
    <label>name: </label>
    <input value="{{product.name}}" placeholder="name">
  </div>
  `

})
export class AppComponent {
  title = 'Tour of Products';
  fproduct = 'CARS';


    product: Product = {
        id: 1,
        name: 'Car'
    };
}