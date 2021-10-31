import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

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
  myTitle: string = "issam angular";
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('issam');
  }

}


