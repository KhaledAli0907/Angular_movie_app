import { Component ,Input, OnInit} from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import { HomeComponent } from '../home/home.component';
import { Router ,RouterLink} from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [ RouterLink, HomeComponent],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent implements OnInit {
  constructor(private moviesService: MovieServiceService) {}
  baseurl: any;
  movies: any;
recommendations: any;
  @Input()movie: any;
  ngOnInit(): void {

   this.baseurl = this.moviesService.getbaseurl()
 }

}
