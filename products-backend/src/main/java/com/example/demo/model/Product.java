package com.example.demo.model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "products")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "sku_id", nullable = false, unique = true)
	private String sku;

	@Column(name = "product_name")
	private String productName;

	@Column(name = "product_precio")
	private Double productPrecio;

	@Column(name = "inventario")
	private Integer inventario;

	@PrePersist
	public void generateSku() {
		this.sku = "SKU-" + System.currentTimeMillis();
	}

	public Product() {}

	public Product(String sku, String productName, Double productPrecio, Integer inventario) {
		this.sku = sku;
		this.productName = productName;
		this.productPrecio = productPrecio;
		this.inventario = inventario;
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getSku() {
		return sku;
	}
	public void setSku(String sku) {
		this.sku = sku;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public Double getProductPrecio() {
		return productPrecio;
	}
	public void setProductPrecio(Double productPrecio) {
		this.productPrecio = productPrecio;
	}
	public Integer getInventario() {
		return inventario;
	}
	public void setInventario(Integer inventario) {
		this.inventario = inventario;
	}
	
	
}


