/**
 * Created by Nelly on 10/21/2016.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/products">Products</a>
    </nav>
    <router-outlet></router-outlet>
    <!--<my-products></my-products>-->
  `
})
export class AppComponent {
    title = 'Tour of Products!!';
}
