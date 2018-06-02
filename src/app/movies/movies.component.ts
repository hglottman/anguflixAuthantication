import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { User } from '../user';
import { Movie } from '../movie';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],

}) 
export class MoviesComponent implements OnInit {

public movies : Array<Movie> = Array<Movie>();
public user : User;
// public filterByTitle: any;
// public filterByYear: number;
public multiFilter = {}


  constructor (public moviesService: MoviesService) {
  
    this.movies = this.moviesService.getMovies();
    this.user = this.moviesService.getUser();
   }

  ngOnInit() {
  }


  purchaseMovie(movie: Movie){
    this.moviesService.budgetCheck(movie);
    }

setFilter(multiFilter){
  
  this.multiFilter = multiFilter;

}

}
