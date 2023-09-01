import {User} from './user.model';

export class DataSource {
  private users: User[]

  constructor() {
    this.users = [
      new User('Prof. H. Wu', 1, 'hwu@qcc.cuny.edu')
    ]
  }
  getUsers(): User[] {
    return this.users;
  }
  
}