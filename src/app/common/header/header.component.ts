import {
  Component
} from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div class="row">
      <logo class="col-md-2 col-sm-4"></logo>
      <breadcrumbs class="col-md-7 col-sm-5"></breadcrumbs>
      <login-links class="col-sm-3 text-right"></login-links>
    </div>
  `
})
export class HeaderComponent  {

}
