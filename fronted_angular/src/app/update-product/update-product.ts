import { Component } from '@angular/core';
import { ProductService } from '../product-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  standalone: false,
  templateUrl: './update-product.html',
  styleUrl: './update-product.css',
})
export class UpdateProduct {

  id:number = 0;
  product:Product=new Product();
  constructor(private productService: ProductService,private route:ActivatedRoute,private router:Router ){ }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.productService.getProductById(this.id).subscribe(data => {
      this.product = data;

    });

  }

  onSubmit(){
    this.productService.updateProduct(this.id, this.product).subscribe(data=>{
      this.product = data as Product;
      this.goToProductList();
      alert("Producto actualizado con exito");
    },
    error=>console.log(error));
  }

    goToProductList(){
    this.router.navigate(['/products']);
  } 


}
