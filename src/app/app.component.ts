import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LogService } from '@app/services/log.service';

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
  constructor(private logServ: LogService, private title: Title, private meta: Meta) {
    console.log(title.getTitle());
    this.title.setTitle('issam');
  }
  log() {
    this.logServ.log();

  }
}


