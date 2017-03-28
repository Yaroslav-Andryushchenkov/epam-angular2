import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  LoginService
} from '../../login/';

@Component({
  selector: 'header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="row">
      <logo class="col-md-2 col-sm-4"></logo>
      <div class="col-md-7 col-sm-5"><breadcrumbs *ngIf="isAuth"></breadcrumbs></div>
      <login-links (logout)="onLogout($event)" class="col-sm-3 text-right"></login-links>
    </div>
  `
})
export class HeaderComponent  {
  public isAuth: boolean;
  constructor(private loginService: LoginService) {
    this.isAuth = !!this.loginService.currentUserToken;
    console.log('isAuth: ' + this.isAuth);
  }
  public onLogout(event) {
    this.isAuth = false;
  }
}
