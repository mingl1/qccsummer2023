import { Component } from '@angular/core';
import { UserRepository } from './repository.model';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  model: UserRepository = new UserRepository();
  newUser: User = new User();

  get jsonUser() {
    return JSON.stringify(this.newUser);
  }

  addUser() {
    console.log('New User is ' + this.jsonUser);
  }
  displayLog(model: any) {
    console.log(model);
  }
}
