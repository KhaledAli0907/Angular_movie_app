import {
  AfterViewInit,
  Component,
  ElementRef,
  NgModule,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import { PaginatorComponent } from '../paginator/paginator.component';
import { SearchComponent } from '../search/search.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchComponent,
    MovieCardComponent,
    RouterLink,
    PaginatorComponent,
    FormsModule,
    CommonModule,
    SearchPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private moviesService: MovieServiceService) {}

  @ViewChild('searchInput') searchInputRef!: ElementRef;

  pageNumber: number = 1;
  movies: any;
  searchText: string = '';
  searchMovies: any;

  // isInputFocused(): any {
  // }

  searchFocus(): void {
    console.log(this.searchInputRef.nativeElement.value);
    this.moviesService
      .getSearchResults(this.searchText)
      .subscribe((res) => (this.searchMovies = res));
  }

  handlePaginatorClick(event: number): void {
    /* recive data from child and update the movies array */
    this.pageNumber = event;
    this.moviesService
      .getMoviePage(`${this.pageNumber}`)
      .subscribe((response: any) => (this.movies = response));
    console.log(`${this.pageNumber}`);
    console.log(this.movies);
  }

  next() {
    /* get the next page */
    // if the user in page 5 reset to 1
    if (this.pageNumber === 5) {
      this.pageNumber = 1;
      //update movies array
      this.handlePaginatorClick(this.pageNumber);
    } else {
      this.pageNumber++;
      this.handlePaginatorClick(this.pageNumber);
    }
  }

  prev() {
    /* get to the previous page */
    // if user in page 1 reset to 5
    if (this.pageNumber === 1) {
      this.pageNumber = 5;
      this.handlePaginatorClick(this.pageNumber);
    } else {
      this.pageNumber--;
      this.handlePaginatorClick(this.pageNumber);
    }
  }

  ngOnInit(): void {
    this.handlePaginatorClick(this.pageNumber);
    this.searchFocus();
  }
}
