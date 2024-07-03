import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  getUserRole ! : string
  constructor(private _authService : AuthService) { }

  ngOnInit(): void {
    this.getUserRole = localStorage.getItem('UserRole') as string;
  }
  // onLogIn(){
  // this._authService.logIn()
  //  }
   onLogOut(){
   this._authService.logOut()
   }
}
