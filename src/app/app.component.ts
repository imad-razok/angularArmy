import { environment } from './../environments/environment.prod';
import { Component, ElementRef, ViewChild } from '@angular/core';
interface Student {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
