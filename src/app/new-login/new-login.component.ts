import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.scss']
})
export class NewLoginComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private router: Router) {
    setTimeout(() => {
      this.router.navigate(['../'], { relativeTo: this.activatedRouter })
    }, 3000);
  }

  ngOnInit(): void {
  }

}
