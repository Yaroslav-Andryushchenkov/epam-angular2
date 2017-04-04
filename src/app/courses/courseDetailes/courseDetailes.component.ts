import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';

import {
  CourseDetailesInterface
} from './';

@Component({
  selector: 'course-detailes',
  templateUrl: './courseDetailes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDetailesComponent implements OnInit{
  @Input('course') courseData: CourseDetailesInterface;
  @Output('delete') deleteEvent = new EventEmitter();
  private highlightColor: string;
  constructor() {
    this.courseData = null;
  }

  public ngOnInit() {
    let currentDate : Date = new Date();
    if (currentDate < this.courseData.publishDate){
      this.highlightColor = 'blue';
    }
    else if((currentDate > this.courseData.publishDate) &&
      (Date.parse(this.courseData.publishDate.toString()) > (Date.now() - 12 * 24 * 3600000))) {
      this.highlightColor = 'green';
    }
  }

  public onDelete() {
    this.deleteEvent.emit({id: this.courseData.id});
  }
}
