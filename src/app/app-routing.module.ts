import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieTrailerComponent } from './components/movie-trailer/movie-trailer.component';

const routes: Routes = [
  { path: 'movie', component: MovieListComponent },
  { path: 'movieTrailer/:nome', component: MovieTrailerComponent },
  { path: '**', redirectTo: '/movie' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
