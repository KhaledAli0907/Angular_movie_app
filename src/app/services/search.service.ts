import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MoviesObject } from '../movies-object';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchTerm = new BehaviorSubject<MoviesObject>(<MoviesObject>{});
  private input = new BehaviorSubject<string>('');

  constructor() {}

  getTerm() {
    return this.searchTerm.asObservable();
  }

  setTerm(term: MoviesObject) {
    this.searchTerm.next(term);
  }

  getInput() {
    return this.input.asObservable();
  }

  setInput(text: string) {
    this.input.next(text);
  }
}
