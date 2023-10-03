import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryToString',
  standalone: true
})
export class CategoryToStringPipe implements PipeTransform {

  transform(value: number): string {
    const categoryStrings = [
      'antipasto',
      'primo',
      'secondo',
      'contorno',
      'dessert',
      'cocktail'
    ]

    return categoryStrings[value]
  }

}
