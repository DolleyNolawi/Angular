import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `

    <hero-birthday> </hero-birthday> 

  `
})
export class AppComponent {
     birthday = new Date(1988, 3, 15); // April 15, 1988
      name = "hello world!";
}


