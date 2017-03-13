import {
  Component,
  OnInit
} from '@angular/core';
import { CourseDetailesInterface } from './';

@Component({
  selector: 'courses',
  template: `
    <course-detailes></course-detailes>
    <course-detailes></course-detailes>
    <course-detailes></course-detailes>
  `
})
export class CoursesComponent implements OnInit {
  public courses: [CourseDetailesInterface];
  constructor() {
    this.courses = [];
  }

  public ngOnInit() {
    this.courses = [{
      id: 1,
      name: 'First course',
      description: 'Description of first course',
      duration: 11,
      publishDate: new Date()
      },
      {
        id: 2,
        name: 'Second course',
        description: 'Description of second course',
        duration: 12,
        publishDate: new Date()
      },
      {
        id: 3,
        name: 'Third course',
        description: 'Description of third course',
        duration: 17,
        publishDate: new Date()
      },
    ];
  }
}
