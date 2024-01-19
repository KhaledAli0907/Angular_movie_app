import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(movies: any[], searchValue: string): any[] {
    return movies.filter((movie) =>
      movie.title.toLowerCase().include(searchValue.toLowerCase())
    );
  }
}
