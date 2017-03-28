import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  LoginService
} from './';

@Component({
  selector: 'login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  public login: string;
  constructor(private loginService: LoginService) {
    this.login = '';
  }
  public onLogin() {
    this.loginService.currentUserToken = this.loginService.login(this.login);
    window.location.href = '/home';
  }
}
