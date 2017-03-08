import {
  Component
} from '@angular/core';

import {
  CourseDetailesInterface
} from './';

@Component({
  selector: 'course-detailes',
  template: `
    <div>
    course detailes block
    </div>
  `
})
export class CourseDetailesComponent implements CourseDetailesInterface {
  public readonly id: string;
  public name: string;
  public description: string;
  public duration: number;
  public publishDate: Date;
  constructor() {
      this.id = Date.now().toString();
      this.name = 'first test course';
      this.duration = 0;
      this.publishDate = null;
      this.description = '';
  }
}
