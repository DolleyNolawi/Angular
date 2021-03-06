/**
 * Created by Nelly on 10/21/2016.
 */
import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    styleUrls: ['app.component.css'],
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/dashboard"  routerLinkActive="active">Dashboard</a>
        <a routerLink="/products"  routerLinkActive="active">Products</a>
    </nav>
    <router-outlet></router-outlet>
    <!--<my-products></my-products>-->
  `
})
export class AppComponent {
    title = 'Tour of Products!!';
}
