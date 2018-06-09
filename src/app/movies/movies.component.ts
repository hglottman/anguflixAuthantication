import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { User } from '../user';
import { Movie } from '../movie';
import { Observable, Subject } from 'rxjs';
import { UserService } from '../user.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],

}) 
export class MoviesComponent implements OnInit {

public movies: Array<Movie> = Array<Movie>();
public user : User;
public multiFilter = {}



  constructor (public moviesService: MoviesService, private userService : UserService) {
  
  
   }

  ngOnInit() {
    
     this.moviesService.getMovies().subscribe((data) => {
       this.movies = data;
     })

     this.moviesService.getMovieObservable.subscribe(data => this.movies = data);
         console.log(this.movies)
  }


  purchaseMovie(movie: Movie){
    this.userService.budgetCheck(movie);
    }

setFilter(multiFilter){
  if(multiFilter.filterByTitle === undefined || multiFilter.filterByTitle === "") {
    this.moviesService.getMovies();
  } else {
    this.moviesService.filterMovies(multiFilter);


  }

}

}
