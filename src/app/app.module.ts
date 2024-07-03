import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { SingleProductComponent } from './shared/components/products/single-product/single-product.component';
import { SingleUserComponent } from './shared/components/users/single-user/single-user.component';
import { UserFormComponent } from './shared/components/users/user-form/user-form.component';
import { ProductFormComponent } from './shared/components/products/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './shared/components/auth/auth.component';
import { AdminComponent } from './shared/components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UsersComponent,
    PageNotFoundComponent,
    NavBarComponent,
    HomeComponent,
    SingleProductComponent,
    SingleUserComponent,
    UserFormComponent,
    ProductFormComponent,
    AuthComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
