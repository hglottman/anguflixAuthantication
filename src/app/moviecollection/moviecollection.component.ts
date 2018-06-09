import { MoviesService } from '../movies.service';
import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { UserService } from '../user.service';

@Component({
  selector: 'app-moviecollection',
  templateUrl: './moviecollection.component.html',
  styleUrls: ['./moviecollection.component.css']
})
export class MoviecollectionComponent implements OnInit {

  public movieCollection: Array<any> = Array<any>();


  constructor(private moviesService : MoviesService, private userService : UserService) { 

   

  }

  ngOnInit() {

    this.movieCollection = this.userService.getUser().moviesCollection;
  }

  removeFromCollection(movie: Movie) {
    let id = movie._id;
    for(let i=0; i < this.movieCollection.length; i ++) {
      if(this.movieCollection[i]._id === id){
      this.movieCollection.splice(i, 1)
      this.moviesService.addMovie(movie);
      }
    }
  }

}
