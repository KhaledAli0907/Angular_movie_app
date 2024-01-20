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
  baseurl: string = '';
  movie: any;
  movies: any;
  rating: number = 0;
  stars: Array<number> = [];
  white: number[] = [];
  @Input() id?: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MovieServiceService,
    public WatchlistCounterService: WatchlistCounterService
  ) {}

  ngOnInit() {
    this.baseurl = this.moviesService.getbaseurl();
    this.id = this.activatedRoute.snapshot.params['id'];
    this.moviesService.getMovieDetaild(this.id).subscribe((response: any) => {
      this.movie = response;
      this.rating = Math.round(this.movie.vote_average / 2);
      this.stars = Array.from({ length: this.rating }, (_, i) => i + 1);
      this.white = Array(5 - this.stars.length);
      console.log(this.movie);
    });
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

    // hadnle starts
  }
}
