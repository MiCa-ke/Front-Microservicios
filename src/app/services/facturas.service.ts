import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from '../model/Factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  /**
   * URLbase del servicio de product en el microservicio
   */
  private baseUrl = 'http://localhost:3000/api/factura';

  constructor(private httpClient: HttpClient) { }

  obtenerTodasLasFacturas(): Observable<Factura[]> {
    return this.httpClient.get<Factura[]>(`${this.baseUrl}/all`);
  }

  obtenerFacturaPorId(id: number): Observable<Factura> {
    return this.httpClient.get<Factura>(`${this.baseUrl}/search/${id}`);
  }

  crearFactura(factura: object): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/create`, factura);
  }

  eliminarFactura(id: number): Observable<any> {
    console.log(id)
    return this.httpClient.delete<any>(`${this.baseUrl}/delete/${id}`);
  }
}