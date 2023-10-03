import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toHumanDate',
  standalone: true
})
export class ToHumanDatePipe implements PipeTransform {

  transform(value: number): string {
    const date = new Date(value)
    return date.toISOString();
  }

}
