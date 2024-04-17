import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product } from '../model/Product';
import { ProductService } from '../services/products.service';
import { Category } from '../model/Category';
import { CategorysService } from '../services/categorys.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit{
  /**
   * Productos a mostrar
   */
  public products: Product[] = [];
  category : Category[] = [];
  /**
   * Constructor que inicia el componente de productos.
   */
  constructor(
    private productsService: ProductService,
    private categoryService: CategorysService,
  ) { }

  ngOnInit(): void{
    this.loadAll();
  }
/**
 * Funcion para consultar los productos
 */
  loadAll(){
    //console.log('SI, DIO <3');
    this.productsService.obtenerTodosLosProductos()
      .subscribe(Response => { 
      this.products = Response;
      //Logica para obtener el nombre de la categoria correspondiente para cada producto
      for (let product of this.products) {
        this.categoryService.buscarCategoria(product.categoryId).subscribe(category => {
          product.categoryName = category.name; //Asigna el nombre de la categoria al producto
        });
      }
    });
  }

  eliminarProducto(product: Product){
    if (product.id !== undefined){
      this.productsService.eliminarProducto(product.id)
        .subscribe(()  => {
          this.loadAll();
        });
    }
  }
}
