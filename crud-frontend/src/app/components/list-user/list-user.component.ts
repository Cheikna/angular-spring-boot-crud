import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/entity/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  private users: User[];

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users : User[]) => {
      console.log(users);
      this.users = users;
    }, (error) => {
      console.log(error);
    })
  }

  editUser(user: User){
    this.userService.updateUser(user);
  }

  deleteUser(user: User){
    this.userService.deleteUser(user.id).subscribe((data) => {
      this.users.splice(this.users.indexOf(user), 1);
    }, 
    (error) => {
      console.log(error);
    })
  }

}
