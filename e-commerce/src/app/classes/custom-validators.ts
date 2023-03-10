import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  public static isNumeric(control: AbstractControl):
  ValidationErrors | null {
    const { value } = control;
    const formattedValue: string = value
      .replaceAll('.', '')
      .replace(',', '.');
    const numericValue = Number(formattedValue);
    return formattedValue === '' || Number.isNaN(numericValue)
      ? { invalidNumber: { value: control.value } } : null;
  }
}
