import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
 

  id:number=0;
  product:Product = new Product();


    constructor(private route:ActivatedRoute, private productService:ProductService) { }


    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.productService.getProductById(this.id).subscribe(data => {
        this.product = data;

      })
    } 


    

}
