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

  // @ViewChild(PaginatorComponent) paginator!: PaginatorComponent;

  // recivedData: number = 0;
  // movies: any;

  // pageIndex: string = '';
  // ngOnInit(): void {
  //   // this.moviesService.getMoviesList().subscribe((movies) => {
  //   //   this.movies = movies;
  //   //   console.log(movies);
  //   // });

  // }

  // ngAfterViewInit(): void {
  //   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //   //Add 'implements AfterViewInit' to the class.
  //   // if (this.paginator) {
  //   this.paginator.sendIndexToParent.subscribe((data: string) => {
  //     this.pageIndex = data;

  //     this.moviesService.getMoviePage(this.pageIndex).subscribe((movies) => {
  //       this.movies = movies;
  //       console.log(`paginator: ${this.movies}`);
  //     });
  //   });
  // }
  // handlePaginatorClick(event: any): void {
  //   this.recivedData = event.pageIndex;
  // }

  receivedData: string = '';

  handlePaginatorClick(event: any): void {
    // Do something with the page index (e.g., fetch data based on the page index)
    this.receivedData = `Data for page index ${event}`;
    console.log(this.receivedData);
  }
  movies: any;
  movie: any;
  ngOnInit(): void {
    this.moviesService.getMoviePage('1').subscribe((movies: any) => {
      this.movies = movies;
      console.log(movies.results);
    });
  }
}
