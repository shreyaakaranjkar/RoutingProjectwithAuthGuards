import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductFormComponent } from '../components/products/product-form/product-form.component';

@Injectable({
  providedIn: 'root'
})
export class CompDeactivateGuard implements CanDeactivate<ProductFormComponent> {
  canDeactivate(
    component: ProductFormComponent, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot,
     nextState?: RouterStateSnapshot | undefined):
      boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log(component)
        // console.log(currentRoute)
        // console.log(currentState);
        // console.log(nextState)
        return component.canDeactive()
  }

  
}
