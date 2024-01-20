import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MoviesObject } from '../movies-object';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { SearchPipe } from '../search.pipe';
import { SearchComponent } from '../search/search.component';
import { MovieServiceService } from '../services/movie-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [
    MovieCardComponent,
    SearchPipe,
    SearchComponent,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css',
})
export class SearchResultComponent implements OnInit, AfterViewInit {
  constructor(
    private _searchService: SearchService,
    private _movieService: MovieServiceService,
    private route: ActivatedRoute
  ) {}

  @ViewChild('htmlSearch', { static: false }) htmlSearch!: ElementRef;
  movies!: MoviesObject;
  searchText!: string | null;

  searchClick(term: string): void {
    this._movieService.getSearchResults(term).subscribe((results: any) => {
      this._searchService.setTerm(results);
    });
    this._searchService.setInput(term);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._searchService.getTerm().subscribe((res) => {
      this.movies = res;
    });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const h6Elment: HTMLElement = this.htmlSearch.nativeElement;
    this._searchService.getInput().subscribe((res: string) => {
      console.log('response' + res);
      h6Elment.innerHTML = `<strong>Search Result: </strong> ${res}`;
    });
  }
}
