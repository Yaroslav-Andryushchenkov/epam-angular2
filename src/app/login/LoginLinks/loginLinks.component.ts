import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  LoginService
} from '../';

@Component({
  selector: 'login-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'loginLinks.component.html'
})
export class LoginLinksComponent {
  @Output('logout') logoutEvent = new EventEmitter();
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
    this.logoutEvent.emit({});
    alert('You have been logged out');
  }
}
