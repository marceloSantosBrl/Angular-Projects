import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public readonly userCredentials: FormGroup<any> = this._fb.group({
    email: ['', Validators.required],
    password: ['',
      [Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^[0-9]*$/)]],
  });

  constructor(private readonly _fb: FormBuilder) {
  }
}
