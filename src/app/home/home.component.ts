import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private moviesService: MovieServiceService) {}

  movies: any;

  ngOnInit(): void {
    this.moviesService.getMoviePage('2').subscribe((movies) => {
      this.movies = movies;
      console.log(movies);
    });
  }
}
