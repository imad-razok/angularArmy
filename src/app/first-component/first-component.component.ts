import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  myColorControl: FormControl = new FormControl();
  myColor: string = '';
  constructor() {
    this.myColorControl.valueChanges.subscribe((data: string) => {
      console.log(data);
    });
    setTimeout(() => {
      this.myColorControl.setValue('issam shimi')
    }, 4000);
  }

  ngOnInit(): void {
  }

}
