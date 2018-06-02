import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { User } from '../user';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  public user: User;
  constructor(private moviesService : MoviesService) { 

    this.user = this.moviesService.getUser()
  

  }
  
  ngOnInit() {
  }


}
