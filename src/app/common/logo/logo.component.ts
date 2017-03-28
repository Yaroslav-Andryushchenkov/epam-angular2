import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <img class="logo" 
      src="http://blog.ninja-squad.com/assets/images/ng2-ebook/ng2-logo.png" 
      alt="no logo image"
    >
  `
})
export class LogoComponent  {

}
