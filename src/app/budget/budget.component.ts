import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  public user: User;
  constructor(private userService : UserService) { 

  
  

  }
  
  ngOnInit() {

    this.user = this.userService.getUser()
  }


}
