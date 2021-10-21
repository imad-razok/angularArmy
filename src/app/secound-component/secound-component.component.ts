import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { validateName } from '../validators/name.validator';

@Component({
  selector: 'app-secound-component',
  templateUrl: './secound-component.component.html',
  styleUrls: ['./secound-component.component.scss']
})
export class SecoundComponentComponent {
  name: FormControl = new FormControl();
  profile: FormGroup;
  /*= new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    adress: new FormGroup({
      city: new FormControl(),
      street: new FormControl()
    })
  });*/
  constructor(private fb: FormBuilder) {
    this.profile = fb.group({
      firstName: [null, Validators.required],
      lastName: null,
      mail: ['', [Validators.email, Validators.pattern('.*.com$')]],
      adress: fb.group({
        city: [null, validateName],
        street: ''
      }),
      password: null,
      confirmPassword: null
    });
    console.log(this.profile);
  }

  get mail() {
    return this.profile.get('mail');
  }
  mail1() {
    console.log(this.profile.get('mail'));
  }
  updateValue() {
    this.name.setValue("issam shimi");
  }
  onSubmit() {
    console.log(this.profile.value);
  }
  updateValues() {
    /*this.profile.setValue({
      firstName: 'issam',
      lastName: "shimi",
      adress: {
        city: 'casa',
        street: '2 mars'
      }
    })*/
    this.profile.patchValue({
      firstName: "issam",
      adress: {
        city: 'rabat'
      }
    });
  }
  get firstName() {
    return this.profile.get('firstName');
  }
  get password() {
    return this.profile.get('password');
  }
}
