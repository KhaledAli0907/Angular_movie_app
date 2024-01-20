import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewMore',
  standalone: true
})
export class ViewMorePipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (!value) return '';

    const words = value.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }

    return value;
  }
  }