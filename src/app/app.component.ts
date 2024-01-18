import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MovieServiceService } from './services/movie-service.service';
import { PaginatorComponent } from './paginator/paginator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    HeaderComponent,
    PaginatorComponent,
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
