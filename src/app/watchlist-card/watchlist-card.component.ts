import { Component, Input, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MovieServiceService } from '../services/movie-service.service';
@Component({
  selector: 'app-watchlist-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './watchlist-card.component.html',
  styleUrl: './watchlist-card.component.css'
})
export class WatchlistCardComponent implements OnInit {
  constructor(private moviesService: MovieServiceService) {}
  baseurl: any;
  movies: any;
  @Input()movie: any;
  ngOnInit(): void {
    // this.moviesService.getRecommendations(this.movie.id)
    // .subscribe(res => this.moviList = res);
     this.baseurl = this.moviesService.getbaseurl()
   }
}
