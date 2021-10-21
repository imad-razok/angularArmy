import { AbstractControl, ValidatorFn } from "@angular/forms";
/*
export function validateName(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value.match(/[0-9]/g)) {
    return { invalidName: true }
  }
  console.log('in validator fn ', control);
  return null;
}*/

export function validateName(nameRegex: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value.match(nameRegex)) {
      return { invalidName: true }
    }
    //console.log('in validator fn ', control);
    return null;
  }

}
