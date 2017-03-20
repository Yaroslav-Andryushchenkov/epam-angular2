import { Injectable } from '@angular/core';
import { CourseDetailesInterface } from './';

@Injectable()
export class CourseService {
  private courses: CourseDetailesInterface[];
  constructor() {
      this.courses = [{
        id: '1',
        name: 'First course',
        description: 'Description of first course',
        duration: 11,
        publishDate: new Date()
      },
      {
        id: '2',
        name: 'Second course',
        description: 'Description of second course',
        duration: 12,
        publishDate: new Date()
      },
      {
        id: '3',
        name: 'Third course',
        description: 'Description of third course',
        duration: 17,
        publishDate: new Date()
      },
    ];
  }
  public getList(): CourseDetailesInterface[] {
    return this.courses;
  }
  public createCourse(name: string, duration: number, publishDate: Date, description?: string) {
      let newCourse = {
        id: Date.now().toString(),
        name: name,
        duration: duration,
        publishDate: publishDate,
        description: description
      };
      this.courses.push(newCourse);
  }
  public get(id: string): CourseDetailesInterface {
    return this.courses.find((item) => { return item.id === id; });
  }
  public update(newValues: CourseDetailesInterface ) {
    let item = this.get(newValues.id);
    for (let prop in newValues) {
      if (newValues.hasOwnProperty(prop)) {
        item[prop] = newValues[prop];
      }
    }
  }
  public remove(id) {
    this.courses = this.courses.filter((item) => {
      return item.id !== id;
    });
  }
}
