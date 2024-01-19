import { Component , OnInit,} from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import { RouterLink } from '@angular/router';
import { WatchlistCardComponent } from '../watchlist-card/watchlist-card.component';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [ WatchlistCardComponent, RouterLink ],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css'
})
export class WatchlistComponent implements OnInit {
  constructor(private moviesService: MovieServiceService) {}

  movies: any;

  ngOnInit(): void {
  this.moviesService.getMoviesList().subscribe((res) => (this.movies = res));

  }
}
