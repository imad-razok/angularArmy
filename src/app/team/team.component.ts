import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(public activetedRoute: ActivatedRoute) {
    console.log(this.activetedRoute)
  }

  ngOnInit(): void {
  }

}
