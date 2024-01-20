import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../services/movie-service.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Router, RouterLink } from '@angular/router';
import { WatchlistCounterService } from '../watchlist-counter.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [RouterLink, MovieCardComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  recommendations: any;
  baseurl: any;
  movie: any;
  movies: any;
  @Input() id?: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MovieServiceService,
    public WatchlistCounterService :WatchlistCounterService
  ) {}

  ngOnInit() {
    this.baseurl = this.moviesService.getbaseurl();
    this.id = this.activatedRoute.snapshot.params['id'];
    this.moviesService
      .getMovieDetaild(this.id)
      .subscribe((response: any) => (this.movie = response));
    this.moviesService
      .getRecommendations(this.id)
      .subscribe((response: any) => (this.recommendations = response));
  }
  getMovi(movi: any) {
    this.movie = movi;
    this.moviesService
      .getRecommendations(movi.id)
      .subscribe((res) => (this.recommendations = res));
  }
  toggleWatchlist(): void {
    if (this.WatchlistCounterService.isInWatchlist(this.movie)) {
      this.WatchlistCounterService.removeFromWatchlist(this.movie);
    } else {
      this.WatchlistCounterService.addToWatchlist(this.movie);

    }
  }
}
