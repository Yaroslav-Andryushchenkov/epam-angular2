import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <input [(ngModel)]="searchRequest" type="text"/>
    <button (click)="onFind()" class="btn btn-primary">Find</button>
  `
})
export class SearchComponent  {
  public searchRequest: string;
  constructor() {
    this.searchRequest = '';
  }
  public onFind() {
    console.log('find ' + this.searchRequest);
  }
}
