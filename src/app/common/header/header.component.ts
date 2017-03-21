import {
  Component
} from '@angular/core';
import {
  LoginService
} from '../../login/';

@Component({
  selector: 'header',
  template: `
    <div class="row">
      <logo class="col-md-2 col-sm-4"></logo>
      <div class="col-md-7 col-sm-5"><breadcrumbs *ngIf="isAuth"></breadcrumbs></div>
      <login-links class="col-sm-3 text-right"></login-links>
    </div>
  `
})
export class HeaderComponent  {
  public isAuth: boolean;
  constructor(private loginService: LoginService) {
    this.isAuth = !!this.loginService.currentUserToken;
    console.log('isAuth: ' + this.isAuth);
  }
}
