import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  standalone: false,
  templateUrl: './create-product.html',
  styleUrl: './create-product.css',
})
export class CreateProduct {

  product:Product=new Product();

  constructor(private productService:ProductService, private route:Router){}

  onSubmit(){
    this.insertProduct();
    console.log(this.product);
  }
  insertProduct() {
    this.productService.createProduct(this.product).subscribe({
      next: (data) => {
        alert('Producto agregado con éxito');
        this.goToProductList();
        console.log(data);
      },
      error: (error) => {
        if (error.status === 400 || error.status === 500) {
          alert('El SKU ya existe o es inválido. Debe ser único.');
        } else {
          alert('Error inesperado al guardar el producto');
        }
        console.error(error);
      }
    });
  } 

  goToProductList(){
    this.route.navigate(['/products']);
    
  } 

}
