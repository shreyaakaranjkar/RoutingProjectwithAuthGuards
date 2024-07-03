import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from 'src/app/shared/models/products';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
productId ! : string;
prodObj !: Iproducts
  constructor(private _route : ActivatedRoute,
    private _productService : ProductsService) {
      this._route.data
      .subscribe(res =>{
        this.prodObj = res['productInfo']
      })
     }

  ngOnInit(): void {
 this.getProductDetails()
  }
  getProductDetails(){
  //   this._route.params
  //   .subscribe((params : Params) =>{
  //    this.productId = params['productsId'];
  //    console.log(this.productId);
  //    if(this.productId){
  //      this.prodObj = this._productService.getSingleProduct(this.productId)  
  //     }
  //    })
  // }
}
}