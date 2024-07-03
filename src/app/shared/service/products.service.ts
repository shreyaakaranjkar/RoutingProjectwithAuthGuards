import { Injectable, OnInit } from '@angular/core';
import { Iproducts } from '../models/products';
import { mobileProducts } from '../const/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit {
productsArray : Array<Iproducts> =[]
  constructor(){ }


  ngOnInit(): void {
  
  }

  getAllProducts():Array<Iproducts>{
    return this.productsArray = mobileProducts
  }
  getSingleProduct(id : string):Iproducts{
  return this.productsArray.find((prod) =>{
   return prod.pId === id
   } )!
  }

  createProduct(prodObj : Iproducts){
   this.productsArray.push(prodObj);
}

updateProduct(updatedProduct : Iproducts){
  let getIndex = this.productsArray.findIndex(product => product.pId === updatedProduct.pId);
  this.productsArray[getIndex].pname = updatedProduct.pname;
  this.productsArray[getIndex].pstatus = updatedProduct.pstatus;
}

}
