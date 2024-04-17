import { Factura } from './Factura' // Importa el modelo de Factura si aún no lo has hecho

export class DetalleFactura {
  public id?: number;
  public cantidad: number;
  public precio: number;
  public factura: Factura; // Una relación con la factura a la que pertenece este detalle
  public productId: number; // El ID del producto relacionado

  constructor(cantidad: number, precio: number, factura: Factura, productId: number, id?: number) {
    this.id = id;
    this.cantidad = cantidad;
    this.precio = precio;
    this.factura = factura;
    this.productId = productId;
  }
}