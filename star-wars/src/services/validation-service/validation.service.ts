import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  public static getControlValidity(
    controlElement: FormGroup | FormControl,
    controlName?: string,
  ): boolean {
    if (controlElement instanceof FormGroup && controlName !== undefined) {
      return !(controlElement.controls[controlName].invalid
        && (controlElement.controls[controlName].dirty
          || controlElement.controls[controlName].touched));
    }
    if (controlElement instanceof FormGroup) {
      throw new Error('Expected control name');
    }
    return !(controlElement.invalid
      && (controlElement.dirty || controlElement.touched));
  }

  public static getControlBorder(
    controlElement: FormGroup | FormControl,
    controlName?: string,
  ): string {
    return this.getControlValidity(controlElement, controlName)
      ? '' : 'is-invalid';
  }
}
