import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../models/products';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
productsArr : Array<Iproducts> = [];
selectedProductId! : string;
  constructor(private _productService : ProductsService) { }

  ngOnInit(): void {
    this.productsArr = this._productService.getAllProducts()
  }
  onProductSelect(id : string){
  this.selectedProductId =id;
  }

}
