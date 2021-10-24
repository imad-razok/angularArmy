import { SimpleService } from './../core/services/simple.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  providers: [SimpleService]
})
export class ParentComponent implements OnInit {

  constructor(public simplService: SimpleService) { }

  ngOnInit(): void {
  }

}
