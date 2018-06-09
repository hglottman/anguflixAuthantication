import { Injectable } from '@angular/core';
import { User } from './user';
import { Movie } from './movie';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})


export class UserService {
  private user = new User()


  constructor(private moviesService : MoviesService) { }

  getUser() {
    return this.user;
  }

  addPurchasedMovie(movie: Movie){
    console.log(movie)
    this.user.moviesCollection.push(movie)
    this.user.budget -= movie.price;
    let id = movie._id;
    this.moviesService.deleteMovie(id)
  }

  budgetCheck(movie: Movie) {
    this.user.budget - movie.price < 0? alert("you dont have enough $$ to buy this film")
    : this.addPurchasedMovie(movie)
  }

}
