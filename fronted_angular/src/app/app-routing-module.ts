import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListProduct } from './list-product/list-product';
import { CreateProduct } from './create-product/create-product';
import { UpdateProduct } from './update-product/update-product';
import { Login } from './auth/login/login';
import { authGuard } from './auth/auth-guard';
import { ProductDetails } from './product-details/product-details';
import path from 'path';

const routes: Routes = [
  { path: 'login', component: Login },

  {
    path: 'products',
    component: ListProduct,
    canActivate: [authGuard]
  },
  {
    path: 'create-product',
    component: CreateProduct,
    canActivate: [authGuard]
  },
  {
    path: 'update-product/:id',
    component: UpdateProduct,
    canActivate: [authGuard]
  },

  {path: 'product-details/:id', component: ProductDetails}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
