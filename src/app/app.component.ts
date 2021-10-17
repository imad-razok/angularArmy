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
export class AppComponent implements OnDestroy {
  title: string = "issam angular";
  jsonObject = {
    "name": "John",
    "age": 30,
    "cars": ["Ford", "BMW", "Fiat"]
  };
  currentDate: Date;
  promiseData: string;
  promiseAsync: Promise<string>;
  observableData: any;
  subscription: Subscription;
  observableAsync: Observable<any>;
  constructor() {
    this.currentDate = new Date();
    console.log(formatDate(this.currentDate, 'yyyy/MMMMM/dd - HH:mm:ss a', 'en-EN'));
    this.getPormise().then((msg: string) => this.promiseData = msg);
    this.promiseAsync = this.getPormise();
    this.getData();
    this.observableAsync = this.getObservable();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  getPormise() {
    return new Promise<string>((res, rej) => {
      setTimeout(() => {
        res('promise complete');
      }, 4000);
    });
  }
  getObservable() {
    return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/2');
  }
  getData() {
    this.subscription = this.getObservable().subscribe((data: any) => {
      console.log('data', data);
      this.observableData = data;
    });
  }
}


