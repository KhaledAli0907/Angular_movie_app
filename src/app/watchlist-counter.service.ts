import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class WatchlistCounterService {
// private counter = new BehaviorSubject<number>(0)
//   constructor() { }
// getCounter(){
//   return this.counter.asObservable();
// }
// setCounter(newCounterVal : number){
//   this.counter.next(newCounterVal);
// }
  private Watchlist: Movie[] = [];

  addToWatchlist(movie: Movie): void {
    if (!this.isInWatchlist(movie)) {
      this.Watchlist.push(movie);
    }
  }

  removeFromWatchlist(movie: Movie): void {
    this.Watchlist = this.Watchlist.filter((m) => m.id !== movie.id);
  }

  getWatchlist(): Movie[] {
    return this.Watchlist;
  }

  isInWatchlist(movie: Movie): boolean {
    return this.Watchlist.some((m) => m.id === movie.id);
  }
}
