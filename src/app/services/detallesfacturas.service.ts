import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetalleFactura } from '../model/DetalleFactura';

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    /**
     * URLbase del servicio de detalleFCTURA en el microservicio
     */
    private baseUrl = 'http://localhost:3000/api/detalleFactura';

    
    constructor(private httpClient: HttpClient) { }

    obtenerTodosLosDetallesFactura(): Observable<DetalleFactura[]> {
        return this.httpClient.get<DetalleFactura[]>(`${this.baseUrl}/all`);
    }

    crearDetalleFactura(detalleFactura: DetalleFactura): Observable<any> {
        return this.httpClient.post<any>(`${this.baseUrl}/create`, detalleFactura);
    }
}