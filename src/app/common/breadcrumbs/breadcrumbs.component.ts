import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="align-middle">breadcurmbs....</span>
  `
})
export class BreadcrumbsComponent  {

}
