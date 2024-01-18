import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  api_key = '63cf1594a209d23aeb283195b9971f64';
  str: string = 'sdsdisji';
  constructor(private http: HttpClient) {}

  getMoviesList() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}`
    );
  }

  getMovieDetaild(id: string | undefined) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.api_key}`
    );
  }

  getMoviePage(pageNumber: string | undefined) {
    return this.http.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${this.api_key}&page=${pageNumber}`
    );
  }
}
