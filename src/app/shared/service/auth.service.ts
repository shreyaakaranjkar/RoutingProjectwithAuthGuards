import { r3JitTypeSourceSpan } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginStatus: boolean = false;
  
  private logInStatus$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  logInstatusAsObs$ = this.logInStatus$.asObservable()

  constructor(private _router: Router) {
    localStorage.setItem('Token', 'JWT Token')
  }
  isAuthnticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (localStorage.getItem('Token')) {
          this.loginStatus = true;
        
        } else {
          this.loginStatus = false;
          this.logInStatus$.next(false)
          this._router.navigate(['']);
        }
        resolve(this.loginStatus)
      }, 100)
    })
  }
  logIn(obj: any) {
    this.loginStatus = true;
   
//object sent from auth service to check authentication and role
    if (obj.email === "john") {
      localStorage.setItem('UserRole', 'Buyer')
      localStorage.setItem('Token', 'JWT Token')
      this.logInStatus$.next(this.loginStatus)
      this._router.navigate(['Home'])


    }
    else if (obj.email === "july") {
      localStorage.setItem('UserRole', 'Admin')
      localStorage.setItem('Token', 'JWT Token')
      this.logInStatus$.next(true)
      this._router.navigate(['Home'])
     
    }
    else if (obj.email === "mary") {
      localStorage.setItem('UserRole', 'Superadmin')
      localStorage.setItem('Token', 'JWT Token')
      this.logInStatus$.next(false)
      this._router.navigate(['Home']) 
    }
  }
  logOut() {
    this.loginStatus = false;
    localStorage.removeItem('Token')
    localStorage.removeItem('UserRole')
    this._router.navigate([''])
    this.logInStatus$.next(false)
  }
}
