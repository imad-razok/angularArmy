import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { validatePassword } from '../validators/password.validator';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.scss']
})
export class ThirdComponentComponent {

  myForm: FormGroup;
  firstName: FormControl;
  lasteName: FormControl;
  password: FormControl;
  confirmPassword: FormControl;

  constructor() {
    this.initFormControles();
    this.createFormGroup();
  }

  initFormControles() {
    this.firstName = new FormControl('');
    this.lasteName = new FormControl('');
    this.password = new FormControl('');
    this.confirmPassword = new FormControl('');
  }

  createFormGroup() {
    this.myForm = new FormGroup({
      first: this.firstName,
      last: this.lasteName,
      pass: this.password,
      confirmPass: this.confirmPassword
    }, validatePassword('pass', 'confirmPass'));
  }
}
