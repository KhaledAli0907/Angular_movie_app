import { Component, Input ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../services/movie-service.service';
import { Router ,RouterLink} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  movies: any;
  movie: any;
  baseurl :any;
  @Input() id?: string;
  constructor(private activatedRoute : ActivatedRoute , private moviesService: MovieServiceService){
    this.id = this.activatedRoute.snapshot.params['id']
    this.moviesService.getMovieDetaild(this.id).subscribe({
      next:(response) => this.movie = response
    })
  }

  ngOnInit(){
    // const id = this.activatedRoute.snapshot.params['id']
    // console.log(this.activatedRoute.snapshot.params["id"])
    // console.log(this.movies.find((movie : any) => movie.id == this.id))
    // this.movie = this.movies.find((movie: any) => movie.id == id)
    this.baseurl = this.moviesService.getbaseurl()

  }
}
