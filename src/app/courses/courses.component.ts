import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { CourseDetailesInterface, CourseService } from './';

@Component({
  selector: 'courses',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <course-detailes *ngFor="let item of courses; let id = index" 
    course-detailes [course]="item"
    (delete)="deleteCourse($event)">
    </course-detailes>
    <div class="text-center no-data" *ngIf="!courses || courses.length == 0"> 
      No Data. Feel free to add new course 
    </div>
  `
})
export class CoursesComponent implements OnInit {
  public courses: CourseDetailesInterface[];
  constructor(private courseService: CourseService) {
    this.courses = null;
  }
  public ngOnInit() {
    this.courses = this.courseService.getList();
    this.courses.forEach((c) => console.log(c.id));
  }

  public deleteCourse(c) {
    if (confirm('Do you really want to delete this course')) {
      this.courseService.remove(c.id);
      this.courses = this.courseService.getList();
    }
  }
}
