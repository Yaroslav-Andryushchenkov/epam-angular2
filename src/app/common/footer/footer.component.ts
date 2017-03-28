import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="text-center">Copyright 2014</div>
  `
})
export class FooterComponent  {

}
