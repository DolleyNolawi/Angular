/**
 * Created by Nelly on 10/20/2016.
 */
import { Component , Input } from '@angular/core';

@Component({
    selector: 'hero-birthday',
    template: `

    <p>{{p | calcprice : q}} </p>
    
`
})
export class HeroBirthdayComponent {

    q = 2;
    p= 5 ;

}
