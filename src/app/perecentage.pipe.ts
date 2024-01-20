import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'perecentage',
  standalone: true
})
export class PerecentagePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const percentage = value / 10 * 100;
    return `${percentage.toFixed(1)}%`;
  }

}
