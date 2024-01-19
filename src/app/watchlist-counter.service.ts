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
  private wishlist: Movie[] = [];

  addToWishlist(movie: Movie): void {
    if (!this.isInWishlist(movie)) {
      this.wishlist.push(movie);
    }
  }

  removeFromWishlist(movie: Movie): void {
    this.wishlist = this.wishlist.filter((m) => m.id !== movie.id);
  }

  getWishlist(): Movie[] {
    return this.wishlist;
  }

  isInWishlist(movie: Movie): boolean {
    return this.wishlist.some((m) => m.id === movie.id);
  }
}
