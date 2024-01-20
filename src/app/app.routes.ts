import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { WatchlistCardComponent } from './watchlist-card/watchlist-card.component';
import { SearchResultComponent } from './search-result/search-result.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'moviedetails/:id',
    component: MovieDetailsComponent,
  },
  {
    path: 'watchlist',
    component: WatchlistComponent,
  },
  {
    path: 'search-result',
    component: SearchResultComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
