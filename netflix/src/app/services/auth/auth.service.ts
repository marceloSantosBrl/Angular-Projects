import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user:string = 'marcelo';

  private password:string = '123456789';

  private getCredentialsValidity(
    user:string,
    password:string,
  ): boolean {
    return this.user === user
    && this.password === password;
  }

  private setUserStatus(status: boolean): void {
    window.sessionStorage.setItem('logado', status.toString());
  }

  public getUserStatus(): boolean {
    return window.sessionStorage.getItem('logado') === 'true';
  }

  public updateStatus(user: string, password: string): void {
    if (!this.getUserStatus()) {
      this.setUserStatus(
        this.getCredentialsValidity(user, password),
      );
    }
  }
}
