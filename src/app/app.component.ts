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

  @ViewChild('username') myUserName: ElementRef<HTMLInputElement>;
  msg: string = "hello world";
  students: Array<Student>;
  isActive: boolean = false;
  colors: Array<string>;
  selectedColor = '';


  constructor() {
    this.students = [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 3, name: 'c' },
      { id: 4, name: 'd' },
      { id: 5, name: 'e' },
    ];
    this.colors = [
      'red', 'blue', 'pink'
    ];

    setTimeout(() => {
      console.log(this.myUserName.nativeElement.value);
    }, 4000);
  }
  refresh() {
    this.students = [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 9, name: 'c' },
      { id: 4, name: 'd' },
      { id: 5, name: 'e' },
    ];
  }

  track(index: number, student: Student) {
    return student.id;
  }

  call(phone: number) {
    console.log(phone)
  }
}
