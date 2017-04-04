import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration',
  pure: false
})

export class FormatDurationPipe implements PipeTransform {
  public transform(duration) {
    if (duration < 60 ) {
      return duration + ' min';
    } else {
      return (duration - duration % 60) / 60 + ' h ' + duration % 60 + ' min ';
    }
  }
}


