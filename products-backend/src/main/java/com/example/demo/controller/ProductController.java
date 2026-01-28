package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.demo.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
@RestController
@RequestMapping("/api/v1/")
//@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
	
	@Autowired
	private ProductRepository productRepository;
	
	//getall 
	
	@GetMapping("/products")
	public List<Product> getAllProducts(){
		return productRepository.findAll();
	}
	
	//post ///
	@PostMapping ("/products")
	public Product createProduct(@RequestBody Product product){
		return productRepository.save(product);
	}

	//get product by id
	@GetMapping("/products/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable long id){

		Product product = productRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Product not found"));
		return ResponseEntity.ok(product);
	}

	//update product

	@PutMapping("/products/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable long id, @RequestBody Product productDetails){

		Product product  = productRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Product not found"));

		product.setSku(productDetails.getSku());
		product.setProductName(productDetails.getProductName());
		product.setProductPrecio(productDetails.getProductPrecio());
		product.setInventario(productDetails.getInventario());

		Product UpdateProduct = productRepository.save(product);
		return ResponseEntity.ok(UpdateProduct);
	}

	//delete product
	@DeleteMapping("/products/{id}")
	public ResponseEntity <Map<String, Boolean>> deleteProductById(@PathVariable long id){
		Product product  = productRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Product not found"));

		productRepository.delete(product);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);

	}

	
}
