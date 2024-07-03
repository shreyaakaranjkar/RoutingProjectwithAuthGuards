import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/users';
import { UsersService } from '../../service/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
usersArr : Array<Iuser> =[];
selectedUserId ! : string;
  constructor(private _userService : UsersService,
    private _route : Router) { }

  ngOnInit(): void {
    this.usersArr = this._userService.getAllUsers()
  }
  onProdAdd(){
    this._route.navigate(['/users','add'])
  }
  onUserSelect(id : string){
 console.log(id);
     this.selectedUserId = id;
  }
}
