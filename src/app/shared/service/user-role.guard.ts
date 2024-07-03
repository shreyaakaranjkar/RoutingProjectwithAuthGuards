import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {
  constructor(private _router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let logInUserRole:string  = localStorage.getItem('UserRole')!
    let userRoleArr:Array<string>= route.data['UserRole'] //activated route gets static data
    
    console.log(logInUserRole);
    console.log(userRoleArr);
    
    
  if(userRoleArr.includes(logInUserRole)){
    return true
  }else{
    const UrlTree : UrlTree = this._router.createUrlTree(['Home'])
    return UrlTree
  }
  }
 }
