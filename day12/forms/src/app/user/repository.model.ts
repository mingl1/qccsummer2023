import { User } from './user.model';
import { DataSource } from './dataSource.model';

export class UserRepository {
  private dataSource: DataSource;
  private users: User[];
  constructor() {
    this.dataSource = new DataSource();
    this.users = new Array<User>();
    this.dataSource.getUsers().forEach((u) => this.users.push(u));
  }
  getUsers(): User[] {
    return this.users;
  }
  getUser(id: number): any {
    return this.users.find((u) => u.id == id);
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
