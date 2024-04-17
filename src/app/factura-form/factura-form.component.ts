import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FacturaService } from '../services/facturas.service';
import { ProductService } from '../services/products.service';
import { Product } from '../model/Product';
import { Factura } from '../model/Factura';
import { DetalleFactura } from '../model/DetalleFactura';
import { AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-factura-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './factura-form.component.html',
  styleUrl: './factura-form.component.css'
})
export class FacturaFormComponent implements OnInit{

  facturaForm!: FormGroup;
  product: Product[] = [];
  productForm!: FormGroup;
  selectedProductId: number | undefined = undefined; 
  
  constructor(
      private fb: FormBuilder,
      private productService: ProductService,
      private router: Router,
      private route: ActivatedRoute,
      private facturaService: FacturaService,
  ) { }

  ngOnInit(): void {
    this.initFacturaForm();
      this.loadProduct();
      this.watchProductChanges();
  }

  initFacturaForm(): void {
    this.facturaForm = this.fb.group({
      name: [''],
      nit: [''],
      total: [0],
      detalles: this.fb.array([])
    });
  }

  loadProduct() {
    this.productService.obtenerTodosLosProductos()
    .subscribe(product =>{
      this.product = product;
    });
  }

  watchProductChanges(): void {
    const detallesControl = this.facturaForm.get('detalles');
    if (detallesControl) {
      detallesControl.valueChanges.subscribe(detalles => {
        console.log('Detalles:', detalles);
        detalles.forEach((detalle: any) => {
          const productId = detalle.productId;
          console.log('Product ID:', productId);
          const product1 = this.product.find(p => p.id === parseInt(productId, 10));
          console.log('Product:', this.product);
          console.log('Product:', product1);
          if (product1) {
            detalle.precio = product1.precio;
            console.log('Precio actualizado:', detalle.precio);
          }
        });
        this.calcularTotal();
      });
    }
  }





  calcularTotal(): void {
    let total = 0;
    if (this.facturaForm && this.facturaForm.get('detalles')) {
      const detallesArray = this.facturaForm.get('detalles') as FormArray;
      detallesArray.controls.forEach((detalleForm: AbstractControl<any, any>, index: number, array: AbstractControl<any, any>[]) => {
        const cantidadControl = detalleForm.get('cantidad');
        const precioControl = detalleForm.get('precio');
        if (cantidadControl && precioControl) {
          const cantidad = cantidadControl.value;
          const precio = precioControl.value;
          if (typeof cantidad === 'number' && typeof precio === 'number') {
            total += cantidad * precio;
          }
        }
      });
    }
    this.facturaForm.patchValue({ total });
  }

  agregarDetalle(): void {
    const detalleForm = this.fb.group({
      productId: [null],
      cantidad: [1],
      precio: [0]
    });
    this.detalles.push(detalleForm);
  }

  get detalles() {
    return this.facturaForm.get('detalles') as FormArray;
  }

  guardarFactura(): void {
    console.log('Guardando factura...');
    const detalles = this.facturaForm.value.detalles;
    let total = 0;

    detalles.forEach((detalle: any) => {
      const cantidad = detalle.cantidad;
      const productId = detalle.productId;
    
      const product = this.product.find(p => p.id === Number(productId));
      if (product) {
        const precio = product.precio;
        total += cantidad * precio;
      }
    });
    const facturaData = {
      name: this.facturaForm.value.name,
      nit: this.facturaForm.value.nit,
      total: total,
      detalles: detalles
    };

    console.log(facturaData);
  
    this.facturaService.crearFactura(facturaData)
      .subscribe((facturaGuardada: any) => {
        this.router.navigate(['/facturas']);
      });
  }

  eliminarDetalle(index: number): void {
    this.detalles.removeAt(index);
  }


}
