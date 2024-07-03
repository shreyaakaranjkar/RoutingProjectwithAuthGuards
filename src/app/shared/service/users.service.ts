import { Injectable, OnInit } from '@angular/core';
import { Iuser } from '../models/users';
import { user } from '../const/users';


@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit{
usersArray : Array<Iuser> =[];
  constructor() { }
ngOnInit(): void {
  
}
getAllUsers(){
 return this.usersArray = user
}
getSingleUser(id : string):Iuser{
 return this.usersArray.find((user) =>{
    return user.userId === id;
  })!
}
 createUser(userObj : Iuser){
 this.usersArray.push(userObj)
 }
 updateUser(updatedObj : Iuser){
  console.log(updatedObj);
  // this.usersArray.forEach(user =>{
  //   if(user.userId === updatedObj.userId){
  //     user.userName = updatedObj.userName;
  //     user.userRole = updatedObj.userRole;
  //   }
  // })
   let getIndex = this.usersArray.findIndex(user => user.userId === updatedObj.userId);
   console.log(getIndex);
   
  //  this.usersArray[getIndex].userName = updatedObj.userName;
  //  this.usersArray[getIndex].userRole = updatedObj.userRole;

  this.usersArray[getIndex] = updatedObj
} 
}
