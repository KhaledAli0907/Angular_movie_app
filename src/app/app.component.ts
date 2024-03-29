import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { WatchlistCardComponent } from "./watchlist-card/watchlist-card.component";
import { MovieServiceService } from './services/movie-service.service';
import { PaginatorComponent } from './paginator/paginator.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    HeaderComponent,
    WatchlistComponent,
    WatchlistCardComponent,
    PaginatorComponent,
    SearchComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular_movie';

  // constructor (private moviesService: MovieServiceService) {}
  // currentPage = 1;

  // movies: any;

  // ngOnInit(): void {
  //   this.moviesService.getMoviePage('10').subscribe((movies) => {
  //     this.movies = movies;
  //     console.log(movies);
  //   });
  // }
}
