import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent,
    },
    {
        path: 'moviedetails/:id',
        component: MovieDetailsComponent,
    },
    {
        path: "**",
        component: NotFoundComponent,
    }
];
