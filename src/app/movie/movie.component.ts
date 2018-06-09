import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Movie } from '../movie';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie = new Movie();
  @Input() buttonText: string = "";
  @Output() parentPurchase: EventEmitter<Movie> = new EventEmitter();
  @Output() parentRemove: EventEmitter<Movie> = new EventEmitter();

  public selectMovieObservable : Observable<Movie>;
  private selectMovieSubject : Subject<Movie>;


  constructor() { 

    this.selectMovieSubject = new Subject<Movie>();
    this.selectMovieObservable = this.selectMovieSubject.asObservable();
  }

  ngOnInit() {
  }

  onClickInspeced () {
    console.log("I have been clicked")
    this.selectMovieSubject.next(this.movie);
  }

  onClickPurchase() {
    this.parentPurchase.emit(this.movie)
  }

  onClickRemove() {
    this.parentRemove.emit(this.movie)
  }

}
