import { Component ,EventEmitter,Input, OnInit, Output} from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import { HomeComponent } from '../home/home.component';
import { Router ,RouterLink} from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [ RouterLink, HomeComponent ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent implements OnInit {
  constructor(private moviesService: MovieServiceService) {}
  baseurl: any;
  movies: any;
@Output() emitMovi: EventEmitter<any> = new EventEmitter()
  @Input()movie: any;
  ngOnInit(): void {
  // this.moviesService.getRecommendations(this.movie.id)
  // .subscribe(res => this.moviList = res);
   this.baseurl = this.moviesService.getbaseurl()
 }

 sendMovi(){
  this.emitMovi.emit(this.movie);
 }
}
