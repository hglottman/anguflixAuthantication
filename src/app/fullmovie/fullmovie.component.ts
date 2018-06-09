import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-fullmovie',
  templateUrl: './fullmovie.component.html',
  styleUrls: ['./fullmovie.component.css']
})
export class FullmovieComponent implements OnInit {

  public movie: any;
  public movieReviews: Array<any> = Array<any>();
  public displayReviews : boolean = false;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.moviesService.getOneMovie(params.id).subscribe(data => {
        this.movie = data;
        this.movieReviews = this.movie.reviews;
        this.movieReviews = this.removingEmptyReviews(this.movieReviews)
        this.sortReviewsFromBigToSmall(this.movieReviews)
      })
    })

    // later will remove those function to the moviesService; 
  }
  sortReviewsFromBigToSmall(movieReviewsToSort) {
    movieReviewsToSort.sort(function (a, b) {
      return b.rating - a.rating;
    });

  }

  removingEmptyReviews(reviews) {
    let clearReviews = [];
    for (let index = 0; index < reviews.length; index++) {
      if (reviews[index].rating) {
        clearReviews.push(reviews[index]);
      }
    }
    return clearReviews;
  }

  onClickToViewReviews() {
    this.displayReviews = true;
    console.log(this.displayReviews)
  }
}
