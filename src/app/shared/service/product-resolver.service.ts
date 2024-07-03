import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Iproducts } from '../models/products';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService  implements Resolve<Iproducts>{
 
  constructor(private _productService : ProductsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Iproducts | Observable<Iproducts> | Promise<Iproducts> {
    // throw new Error('Method not implemented.');
    let getUserId = route.params['productsId'];
   return this._productService.getSingleProduct(getUserId)
  }
}
