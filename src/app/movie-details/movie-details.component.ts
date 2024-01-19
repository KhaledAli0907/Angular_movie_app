import { Component, Input ,OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../services/movie-service.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Router ,RouterLink} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [RouterLink, MovieCardComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  recommendations: any;
  baseurl :any;
  movie: any;
  movies: any;
  @Input() id?: string;
  constructor(private activatedRoute : ActivatedRoute , private moviesService: MovieServiceService){
    this.id = this.activatedRoute.snapshot.params['id']
    this.moviesService.getMovieDetaild(this.id).subscribe((response: any) => (this.movie = response));
    this.moviesService.getRecommendations(this.id).subscribe((response:any) => (this.recommendations = response));
  }

  ngOnInit(){
    // const id = this.activatedRoute.snapshot.params['id']
    // console.log(this.activatedRoute.snapshot.params["id"])
    // console.log(this.movies.find((movie : any) => movie.id == this.id))
    // this.movie = this.movies.find((movie: any) => movie.id == id)
    this.baseurl = this.moviesService.getbaseurl()
  }
}
