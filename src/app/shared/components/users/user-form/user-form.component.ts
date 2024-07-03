import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IcanDeactivateComp } from 'src/app/shared/models/products';
import { Iuser } from 'src/app/shared/models/users';
import { UsersService } from 'src/app/shared/service/users.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit , IcanDeactivateComp{
userForm ! : FormGroup
isInEditMode : boolean = false;
userId !: string;
userObj ! : Iuser;
private _userService = inject(UsersService);
private _uuidService = inject(UuidService);
private _router = inject(Router);
private _route= inject(ActivatedRoute);
  constructor() { }

  ngOnInit(): void {
  this.createUserForm()
    this._route.params
      .subscribe((params : Params) =>{
      this.userId = params['usersId']
      console.log(this.userId);
      if(this.userId){
        this.isInEditMode = true;
        this.userObj = this._userService.getSingleUser(this.userId)
        this.userForm.patchValue(this.userObj)
      }
  })
}
   createUserForm(){
  this.userForm = new FormGroup({
    userName : new FormControl(null,[Validators.required]),
    userRole : new FormControl(null,[Validators.required]),
  })
}

   onFormSubmit(){
    if(this.userForm.valid){
        //  console.log(this.userForm.value);
       let userObj = {...this.userForm.value, userId : this._uuidService.uuidv4()}
         this._userService.createUser(userObj)
         this.userForm.reset()
         this._router.navigate(['users'])
       }
   }
   onUserUpdate(){
    console.log('Users Updated successfully!!!');
    let updatedUser ={...this.userForm.value,userId :this.userId}
    console.log(updatedUser);
   console.log( this._userService.updateUser(updatedUser));
   this._router.navigate(['users'])
   }

   canDeactive(){
    if(this.userForm.dirty){
      return confirm('Are you sure to leave this page?')
    }
    return true
   }
  }
