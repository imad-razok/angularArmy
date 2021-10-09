import { environment } from './../environments/environment.prod';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  msg: string = "hello world";
  someColor: string = "color:#0f0";
  constructor() {
    console.log(environment.x);
  }


}
