import { Injectable } from '@angular/core';
import { User } from './user';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Observable, Subject } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public movies: Array<Movie> = Array<Movie>();
  public getMovieObservable: Observable<Movie[]>;
  private getMovieSubject: Subject<Movie[]>;

  constructor(private http: HttpClient) {
    this.getMovieSubject = new Subject<Movie[]>();
    this.getMovieObservable = this.getMovieSubject.asObservable();
  }

  getMovies() {
    let movieObservable = this.http.get<Array<Movie>>('https://anguflix-api.herokuapp.com/api/movies')
    movieObservable.subscribe((data) => {
      this.movies = data;
      this.getMovieSubject.next(data)
    }

    )
    return movieObservable
  }

  getOneMovie(id : number) {
    console.log(id);
   return this.http.get<Array<Movie>>('https://anguflix-api.herokuapp.com/api/movies/'+ id);

  }

  filterMovies(multiFilter : any) {
    let title = multiFilter.filterByTitle;
    this.http.get<Array<Movie>>('https://anguflix-api.herokuapp.com/api/movies?title=' + title)
      .subscribe(
        data => this.getMovieSubject.next(data));
  }

  deleteMovie(id) {
    let index;
    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i]._id == id) {
        index = i;
      };
    }
    this.movies.splice(index, 1);
    this.getMovieSubject.next(this.movies);
  }

  addMovie(movie: Movie) {
    this.movies.push(movie);
  }
}


