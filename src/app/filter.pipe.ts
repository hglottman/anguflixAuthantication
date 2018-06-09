import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {



  transform(movies: any, multiFilter: any): any {
    if (multiFilter.filterByTitle === undefined && multiFilter.filterByYear === undefined) {
      return movies;
      
    } else {
      if (multiFilter.filterByYear === undefined) {
        return movies.filter(function (movie) {
          return movie.title.toLowerCase().includes(multiFilter.filterByTitle.toLowerCase());
        })
      } else if (multiFilter.filterByTitle === undefined) {
        return movies.filter(function (movie) {
          return movie.year == multiFilter.filterByYear;
        })
      }
    } if ((multiFilter.filterByTitle !== undefined && multiFilter.filterByYear !== undefined)) {
      return movies.filter(function (movie) {
        return movie.year == multiFilter.filterByYear &&
          movie.title.toLowerCase().includes(multiFilter.filterByTitle.toLowerCase());
      })
    }
  }
}



