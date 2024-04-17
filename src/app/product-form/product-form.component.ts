import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../services/products.service';
import { Product } from '../model/Product';
import { Category } from '../model/Category';
import { CategorysService } from '../services/categorys.service';
import { MatSelectModule } from '@angular/material/select'; // Importar MatSelectModule
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, MatSelectModule, CommonModule ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})

export class ProductFormComponent implements OnInit{

  form?: FormGroup;
  product?: Product;
  category : Category[] = [];
  selectedCategory: string = ''; 

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategorysService,
  ) { }

  ngOnInit(): void {
      this.loadCategory();

      const id = this.route.snapshot.paramMap.get('id');
      console.log('id', id);

      if (id){
        this.productService.obtenerProductoPorId(parseInt(id))
          .subscribe(product =>{
            this.product = product;      
            this.form = this.fb.group({
              nombre: [product.name,],
              descripcion: [product.descripcion, [Validators.required]],
              precio: [product.precio, [Validators.required]],
              categoryId: [product.categoryId,]
            });
          })
       }else {
        this.form = this.fb.group({
          nombre: ['',],
          descripcion: ['', [Validators.required]],
          precio: ['', [Validators.required]],
          categoryId: ['', [Validators.required]]
      });
    }
  }

  loadCategory() {
    this.categoryService.consultarCategory()
      .subscribe(category =>{
        console.log('category.id', category);        
        this.category = category;
      });
  }

  save() {
    const { nombre, descripcion, precio, categoryId, categoryName} = this.form!.value;
    const productData = {

      name: nombre, // Mapea "nombre" a "name" para que coincida con la API
      descripcion,
      precio,
      categoryId,
      categoryName
    };
    //console.log('Datos a enviar:', categoryData); // Agregar console.log()

    if (this.product && this.product.id !== undefined){
      this.productService.editarProduct(this.product.id, productData)
        .subscribe(() => {
          this.router.navigate(['/products']);
      });
    } else {
      this.productService.crearProduct(productData)
        .subscribe(() => {
          this.router.navigate(['/products']);this.product
      });
    }
  }  
}
