import { DetalleFactura } from "./DetalleFactura";

/**
 * Entidad que mapea la informacion obtenida del microservicio factura
 */
export class Factura {

    public id?: number;
    public name: string;
    public nit: number;
    public fechahora: Date;
    public total: number;

    public detalles: DetalleFactura[];

  constructor(name: string, nit: number, fechahora: Date, total: number, detalles: DetalleFactura[], id?: number) {
    this.id = id;
    this.name = name;
    this.nit = nit;
    this.fechahora = fechahora;
    this.total = total;
    this.detalles = detalles;
  }
}