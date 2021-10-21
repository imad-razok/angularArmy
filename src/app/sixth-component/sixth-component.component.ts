import { Component } from '@angular/core';

@Component({
  selector: 'app-sixth-component',
  templateUrl: './sixth-component.component.html',
  styleUrls: ['./sixth-component.component.scss']
})
export class SixthComponentComponent {
  schoolName: string = 'name';
  totalStudentCount: number = 5000;
  constructor() { }
  onSubmit(values) {
    console.log("on submit", values);
  }
}
