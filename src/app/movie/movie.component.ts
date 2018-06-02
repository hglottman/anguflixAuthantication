import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Movie } from '../movie';


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


  constructor() { }

  ngOnInit() {
  }

  onClickPurchase() {
    this.parentPurchase.emit(this.movie)
  }

  onClickRemove() {
    this.parentRemove.emit(this.movie)
  }

}
