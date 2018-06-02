import { MoviesService } from '../movies.service';
import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-moviecollection',
  templateUrl: './moviecollection.component.html',
  styleUrls: ['./moviecollection.component.css']
})
export class MoviecollectionComponent implements OnInit {

  public movieCollection: Array<any> = Array<any>();


  constructor(private moviesService : MoviesService) { 

    this.movieCollection = this.moviesService.getUser().moviesCollection;

  }

 

  ngOnInit() {
  }

  removeFromCollection(movie: Movie) {
    let id = movie.id;
    for(let i=0; i < this.movieCollection.length; i ++) {
      if(this.movieCollection[i].id === id){
      this.movieCollection.splice(i, 1)
      this.moviesService.addMovie(movie);
      }
    }
  }

}
