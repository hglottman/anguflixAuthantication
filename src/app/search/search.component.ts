import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})



export class SearchComponent implements OnInit {

  @Output() parentFunction: EventEmitter<any> = new EventEmitter();

public filterByTitle;
public filterByYear;

  constructor() { }

  ngOnInit() {
    
  }

 giveFilterObjectToParant(){
   if(this.filterByTitle === ""){
     this.filterByTitle = undefined;
   }
   let  multiFilter =  {
    filterByTitle: this.filterByTitle,
    filterByYear: this.filterByYear
  }
  this.parentFunction.emit(multiFilter)
   
 }

}


