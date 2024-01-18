import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import { PaginatorComponent } from '../paginator/paginator.component';
import { SearchComponent } from '../search/search.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchComponent,
    MovieCardComponent,
    RouterLink,
    PaginatorComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private moviesService: MovieServiceService) {}

  pageNumber: number = 1;
  movies: any;

  handlePaginatorClick(event: number): void {
    /* recive data from child and update the movies array */
    this.pageNumber = event;
    this.moviesService
      .getMoviePage(`${this.pageNumber}`)
      .subscribe((response: any) => (this.movies = response));
    console.log(`${this.pageNumber}`);
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
  }
}
