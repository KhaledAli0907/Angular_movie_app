import { Component , OnInit,} from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import { RouterLink } from '@angular/router';
import { WatchlistCardComponent } from '../watchlist-card/watchlist-card.component';
import { WatchlistCounterService } from '../watchlist-counter.service';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [ WatchlistCardComponent, RouterLink ],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css'
})
export class WatchlistComponent implements OnInit {
  constructor(private moviesService: MovieServiceService ,public WatchlistCounterService :WatchlistCounterService) {}
  movies: any;
  counter = 0;
  ngOnInit(): void {
  // this.moviesService.getMoviesList().subscribe((res) => (this.movies = res));
  // this.WatchlistCounterService.getWishlist().subscribe((value) => this.counter = value)

  }
  removeFromWishlist(movie: any): void {
    this.WatchlistCounterService.removeFromWishlist(movie);
  }
}
