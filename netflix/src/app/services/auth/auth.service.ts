import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private email:string = 'marcelo@senai.com';

  private password:string = '123456789';

  private getCredentialsValidity(
    email:string,
    password:string,
  ): boolean {
    return this.email === email
    && this.password === password;
  }

  private setUserStatus(status: boolean): void {
    window.localStorage.setItem('logado', status.toString());
  }

  public getUserStatus(): boolean {
    return window.localStorage.getItem('logado') === 'true';
  }

  public updateStatus(email: string, password: string): void {
    if (!this.getUserStatus()) {
      this.setUserStatus(
        this.getCredentialsValidity(email, password),
      );
    }
  }
}
