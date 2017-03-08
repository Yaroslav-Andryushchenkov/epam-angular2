/**
 * Created by User on 08.03.2017.
 */

export interface CourseDetailesInterface {
  readonly id: string;
  name: string;
  description?: string;
  duration: number;
  publishDate: Date;

}
