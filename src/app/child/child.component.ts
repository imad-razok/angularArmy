import { SimpleService } from './../core/services/simple.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(public simpleService: SimpleService) { }

  ngOnInit(): void {
  }

}
