import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { FullmovieComponent } from './fullmovie/fullmovie.component';
import { MoviecollectionComponent } from './moviecollection/moviecollection.component';

const routes: Routes = [
  { path: '', component: MoviecollectionComponent},
  { path: 'fullmovie/:id', component: FullmovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
