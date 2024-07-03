import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Iuser } from "../models/users";
import { UsersService } from "./users.service";

//class resolver cannot be invoked without new keyword - user @Injectable decorator to create an instance

@Injectable({
    providedIn : 'root'
})

export class UserResolver implements Resolve<Iuser>{

    constructor(private userServ : UsersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     Iuser | Observable<Iuser> | Promise<Iuser> {


        let getUserId = route.params['usersId'];
        return this.userServ.getSingleUser(getUserId)
    }

    
}