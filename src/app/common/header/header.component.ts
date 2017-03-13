import {
  Component
} from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div class="row">
      <logo class="col-sm-2"></logo>
      <breadcrumbs class="col-sm-7"></breadcrumbs>
      <login-links class="col-sm-3"></login-links>
    </div>
  `
})
export class HeaderComponent  {

}
