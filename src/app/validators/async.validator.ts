import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, pipe } from "rxjs";
import { ajax } from 'rxjs/ajax';
import { delay, map } from 'rxjs/operators';


export function usernameValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return chekUsername().pipe(
      map(res => {
        console.log('res is', res);
        return res.username === control.value ? { usernameExist: true } : null;
      })
    )
  };

  function chekUsername(): Observable<any> {
    return ajax.getJSON('https://jsonplaceholder.typicode.com/users/1').
      pipe(delay(1000));
  }
}
