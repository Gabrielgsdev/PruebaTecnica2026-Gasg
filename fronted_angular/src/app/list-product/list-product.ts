import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-product',
  standalone: false,
  templateUrl: './list-product.html',
  styleUrl: './list-product.css',
})

export class ListProduct implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.productService.getProductList().subscribe({
      next: data => {
        this.products = data;
      },
      error: err => console.error(err)
    });
  }

    viewProduct(id: number): void {
    this.router.navigate(['product-details', id]);
  }

  updateProduct(id: number): void {
    this.router.navigate(['update-product', id]);
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.getProducts(); // refresca la lista correctamente
        alert('Producto eliminado con éxito');
      },
      error: err => console.log(err)
    });
  }
}
