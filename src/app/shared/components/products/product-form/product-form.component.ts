import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IcanDeactivateComp, Iproducts } from 'src/app/shared/models/products';
import { CompDeactivateGuard } from 'src/app/shared/service/comp-deactivate.guard';
import { ProductsService } from 'src/app/shared/service/products.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
}) 
export class ProductFormComponent implements OnInit, IcanDeactivateComp {
  productForm !: FormGroup;
  productId !: string;
  productObj !: Iproducts;
  isInEditMode : boolean = false;


  private _uuidService = inject(UuidService);
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);
  private _productService = inject(ProductsService);

  constructor() { }

  ngOnInit(): void {
  this.createProductForm()
   this.getProduct()
   this._route.queryParams
     .subscribe((params : Params) =>{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        console.log(params['canEdit']);
        let canEditState = + params['canEdit']
        if(!canEditState && this.isInEditMode){
          this.productForm.disable()
        }else{
          this.productForm.enable()
        }
     })

     //to detect changes and identify is user leaves the component

     
}
  
getProduct(){
  this._route.params
  .subscribe((params : Params) =>{
    console.log(params);
    this.productId = params['productsId'];
    if(this.productId){
           this.isInEditMode = true
      this.productObj = this._productService.getSingleProduct(this.productId)
      this.productForm.patchValue(this.productObj)
    }
  })
}

  createProductForm(){
    this.productForm = new FormGroup({
      pname : new FormControl(null,[Validators.required]),
      pstatus : new FormControl(null,[Validators.required]),
    })
     }

     onProdFormSubmit(){
      if(this.productForm.valid && !this.isInEditMode){
        let canvalue = Math.random() >= .5 ? 1 : 0 ;
        console.log(canvalue);
      let prodObj = {...this.productForm.value ,pId : this._uuidService.uuidv4(), canraturn: canvalue}
         this._productService.createProduct(prodObj);
         this._router.navigate(['products'])
      }
     }
     onProductupdate(){
      if(this.isInEditMode){
        let productUpdateObj : Iproducts = {...this.productForm.value,pId : this.productId}
      console.log(productUpdateObj);
      this._productService.updateProduct(productUpdateObj);
      this._router.navigate(['products'])
      }
     }

     canDeactive(){
      if(this.productForm.dirty){
        return confirm('Are you sure to leave this page? Changes will not be saved!! ')
      }
     return true
     }
}
