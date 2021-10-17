import { formatDate } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ajax } from 'rxjs/ajax'
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
  title: string = "issam angular";

}


