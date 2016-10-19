import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Product of my choice is: {{myProduct.name}}</h2>
    <p>Products:</p>
    <ul>
      <li *ngFor="let product of products">
        {{ product.name }}
      </li>
    </ul>
  `
})
export class AppComponent {

  title = "Products avaibale in store";
  products =[
    {id:1, name: 'iPhone'},
    {id:2, name: 'iPad'},
    {id:3, name: 'iPod'},
    {id:4, name: 'Apple TV'},
    {id:5, name: 'Apple Watch'},
    {id: 'hi' , value:'hi'}
  ];

  myProduct = this.products[0];
}
