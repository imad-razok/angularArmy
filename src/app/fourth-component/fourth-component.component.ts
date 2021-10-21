import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { usernameValidator } from '../validators/async.validator';

@Component({
  selector: 'app-fourth-component',
  templateUrl: './fourth-component.component.html',
  styleUrls: ['./fourth-component.component.scss']
})
export class FourthComponentComponent {
  myForm: FormGroup;
  username: FormControl;
  lazyUsername: FormControl;

  constructor() {
    this.initForms();
    this.createFormGroup()
  }
  initForms() {
    this.username = new FormControl(null, [Validators.required], [usernameValidator()]);
    this.lazyUsername = new FormControl(null, {
      validators: [Validators.required],
      asyncValidators: [usernameValidator()],
      updateOn: 'blur'
    });
  }
  createFormGroup() {
    this.myForm = new FormGroup({
      username: this.username,
      lazyUsername: this.lazyUsername
    });
  }

}
