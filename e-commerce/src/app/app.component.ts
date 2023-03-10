import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomValidators } from './classes/custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  formC = new FormControl('', [CustomValidators.isNumeric]);
}
