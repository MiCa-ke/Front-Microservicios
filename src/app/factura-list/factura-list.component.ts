import { Component, OnInit, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Factura } from '../model/Factura';
import { FacturaService } from '../services/facturas.service'
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factura-list',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './factura-list.component.html',
  styleUrl: './factura-list.component.css'
})
export class FacturaListComponent implements OnInit{

  public facturas: Factura[] = [];

  constructor(
    private facturaService: FacturaService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void{
    this.facturaService.obtenerTodasLasFacturas()
      .subscribe(facturas => {
        this.facturas = facturas;
        this.facturas.forEach(factura => {
          factura.fechahora = new Date(factura.fechahora);
        });
      });
  }

  eliminarFactura(factura: Factura): void {
    console.log(factura.id);
    if (factura.id !== undefined) {
      console.log(factura.id)
      this.facturaService.eliminarFactura(factura.id)
        .subscribe(() => {
          this.router.navigate(['/facturas']); // Recargar las facturas después de eliminar una
        });
    }
  }

}
