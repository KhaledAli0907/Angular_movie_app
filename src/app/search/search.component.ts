import { SearchService } from './../services/search.service';
import { MovieServiceService } from './../services/movie-service.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesObject } from '../movies-object';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(
    private movieService: MovieServiceService,
    private _searchService: SearchService
  ) {}
  movies!: MoviesObject;
  searchText!: string;
  //   ngOnInit(): void {
  //     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //     //Add 'implements OnInit' to the class.
  // }

  searchClick(term: string): void {
    console.log('search term ' + term);

    this.movieService.getSearchResults(term).subscribe((results: any) => {
      this._searchService.setTerm(results);
    });

    this._searchService.setInput(term);
  }
}
