import {
  Component
} from '@angular/core';
import {
  LoginService
} from '../';

@Component({
  selector: 'login-links',
  templateUrl: 'loginLinks.component.html'
})
export class LoginLinksComponent {
  public loginText: string;
  constructor(private loginService: LoginService) {
    this.loginText = 'log in';
    if (loginService.currentUserToken) {
      this.loginText = loginService.getUserInfo(loginService.currentUserToken);
    }
  }
  public onLogOff(){
    this.loginService.logout();
    this.loginService.currentUserToken = null;
    this.loginText = 'log in';
    alert('You have been logged out');
  }
}
