import { Component, Input, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MovieServiceService } from '../services/movie-service.service';
import { WatchlistCounterService } from '../watchlist-counter.service';
import { ViewMorePipe } from '../view-more.pipe';

@Component({
  selector: 'app-watchlist-card',
  standalone: true,
  imports: [RouterLink, ViewMorePipe],
  templateUrl: './watchlist-card.component.html',
  styleUrl: './watchlist-card.component.css'
})
export class WatchlistCardComponent implements OnInit {
  constructor( public WatchlistCounterService :WatchlistCounterService , private moviesService: MovieServiceService) {}
  baseurl: any;
  movies: any;
  @Input()movie: any;
  ngOnInit(): void {
    // this.moviesService.getRecommendations(this.movie.id)
    // .subscribe(res => this.moviList = res);
     this.baseurl = this.moviesService.getbaseurl()

   }

}
