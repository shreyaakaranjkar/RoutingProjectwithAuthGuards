import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iuser } from 'src/app/shared/models/users';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
  userId !: string; 
  userObj !:Iuser 
    constructor(private _route : ActivatedRoute,
    private _userService : UsersService) { 

      this._route.data.subscribe(res => {
        this.userObj = res['userInfo']
      })
    }

  ngOnInit(): void {
  this.getUserDetails()
}
getUserDetails(){
  // this._route.params
  // .subscribe((params : Params) =>{
  //  this.userId = params['usersId'];
  //  if(this.userId){
  //   this.userObj = this._userService.getSingleUser(this.userId)
  //    } 
  // })
 }

}
