import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListProduct } from './list-product/list-product';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CreateProduct } from './create-product/create-product';
import { form } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import { UpdateProduct } from './update-product/update-product';
import { Login } from './auth/login/login';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ProductDetails } from './product-details/product-details';

@NgModule({
  declarations: [
    App,
    ListProduct,
    CreateProduct,
    UpdateProduct,
    Login,
    ProductDetails
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },

  provideBrowserGlobalErrorListeners()
],
  bootstrap: [App]
})
export class AppModule { }
