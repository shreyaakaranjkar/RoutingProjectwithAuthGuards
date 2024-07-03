import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeComponent } from './shared/components/home/home.component';
import { SingleProductComponent } from './shared/components/products/single-product/single-product.component';
import { SingleUserComponent } from './shared/components/users/single-user/single-user.component';
import { UserFormComponent } from './shared/components/users/user-form/user-form.component';
import { ProductFormComponent } from './shared/components/products/product-form/product-form.component';
import { AuthGuardService } from './shared/service/auth-guard.service';
import { AuthComponent } from './shared/components/auth/auth.component';
import { UserRoleGuard } from './shared/service/user-role.guard';
import { AdminComponent } from './shared/components/admin/admin.component';
import { ProductResolverService } from './shared/service/product-resolver.service';
import { UserResolver } from './shared/service/user-resolver.service';
import { CompDeactivateGuard } from './shared/service/comp-deactivate.guard';
import { UserDeactivateGuard } from './shared/service/user-deactivate-guard.guard';

const routes: Routes = [
{
  path : "",
  component :AuthComponent,
  title : "LogIn",
},
{
  path : "Home",
  component :HomeComponent,
  title : "DashBoard",
  data : {
    UserRole :['Buyer','Admin','Superadmin']
  },
},
{
  path:"products",
  component: ProductsComponent,
  title : "Products",
  canActivate : [AuthGuardService,UserRoleGuard],
  data : {
    UserRole :['Buyer']
  },
  children : [
    {
      path:"add",
      component: ProductFormComponent
    },
    {
      path:":productsId",
      component: SingleProductComponent,
      resolve : {
        productInfo : ProductResolverService
      }
    },
    {
      path:":productsId/Edit",
      component:ProductFormComponent,
      canDeactivate : [CompDeactivateGuard]
    },
  ]
},
{
  path:"users",
  component : UsersComponent,
  title : "Users",
  data : {
    UserRole :['Admin','Buyer']
  },
  children : [
    {
      path:"add",
      component : UserFormComponent
    },
    {
      path:":usersId",
      component : SingleUserComponent,
      //userresolver is added here
      resolve : {
        userInfo : UserResolver
      }
    },
    {
      path:":usersId/edit",
      component : UserFormComponent,
      canDeactivate : [UserDeactivateGuard]
    },
 ]
 },
 {
  path:"admin",
  component : AdminComponent,
  data :{
   UserRole : ['Superadmin']
  },
  canActivate : [AuthGuardService,UserRoleGuard],

},

{
  path : 'page-not-found',
  component : PageNotFoundComponent,
  data : { //static data
    msg : "Page Not Found!!!"
  }
},
{
  path : '**',
  redirectTo :'page-not-found',
 
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
