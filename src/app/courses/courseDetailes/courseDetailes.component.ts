import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import {
  CourseDetailesInterface
} from './';

@Component({
  selector: 'course-detailes',
  templateUrl: './courseDetailes.component.html'
})
export class CourseDetailesComponent {
  @Input('course') courseData: CourseDetailesInterface;
  @Output('delete') deleteEvent = new EventEmitter();
  constructor() {
    this.courseData = null;
  }

  public onDelete() {
    this.deleteEvent.emit({id: this.courseData.id});
  }
}
