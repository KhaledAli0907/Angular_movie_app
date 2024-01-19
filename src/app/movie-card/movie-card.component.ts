import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import { HomeComponent } from '../home/home.component';
import { Router, RouterLink } from '@angular/router';
import { WatchlistCounterService } from '../watchlist-counter.service';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RouterLink, HomeComponent],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent implements OnInit {
  constructor(private moviesService: MovieServiceService ,public WatchlistCounterService :WatchlistCounterService) {}
  baseurl: any;
  movies: any;
  counter = 0;

  @Output() emitMovi: EventEmitter<any> = new EventEmitter();
  @Input() movie: any;
  ngOnInit(): void {
    // this.moviesService.getRecommendations(this.movie.id)
    // .subscribe(res => this.moviList = res);
    this.baseurl = this.moviesService.getbaseurl();
    // this.WatchlistCounterService.getCounter().subscribe((value) => this.counter = value)

  }

  sendMovi() {
    this.emitMovi.emit(this.movie);
  }
//   increaseCounter(){
// this.WatchlistCounterService.setCounter(this.counter +1)
//   }
//   decreaseCounter(){
//     this.WatchlistCounterService.setCounter(this.counter -1)
//   }
  toggleWishlist(): void {
    if (this.WatchlistCounterService.isInWishlist(this.movie)) {
      this.WatchlistCounterService.removeFromWishlist(this.movie);
    } else {
      this.WatchlistCounterService.addToWishlist(this.movie);
    }
  }
}
