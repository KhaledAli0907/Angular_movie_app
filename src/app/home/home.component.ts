import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import { SearchComponent } from '../search/search.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Router ,RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ SearchComponent, MovieCardComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private moviesService: MovieServiceService) {}

  movies:any;
  movie: any;
  ngOnInit(): void {
    this.moviesService.getMoviePage("1").subscribe((movies: any) => {
      this.movies = movies;
      console.log(movies.results);
    });
  }

}
