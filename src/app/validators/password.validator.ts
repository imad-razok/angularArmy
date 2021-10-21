import { FormGroup } from "@angular/forms";
/*
export function validatePassword(formGroup: FormGroup): { [key: string]: boolean } | null {
  console.log('in log password validator ', formGroup);
  //formGroup.controls.pass.setErrors({ wrong: true });
  const password = formGroup.controls.pass;
  const confirmPassword = formGroup.controls.confirmPass;
  if (password.dirty && confirmPassword.dirty && password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ wrongPassword: true });
  }
  return { wrongError: true };
}
*/

export function validatePassword(control1: string, control2: string) {
  return (formGroup: FormGroup): { [key: string]: boolean } | null => {
    console.log('in log password validator ', formGroup);
    //formGroup.controls.pass.setErrors({ wrong: true });
    const password = formGroup.controls[control1];
    const confirmPassword = formGroup.controls[control2];
    if (password.dirty && confirmPassword.dirty && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ wrongPassword: true });
    }
    return null;
  }
}
