import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  /**
   * URLbase del servicio de product en el microservicio
   */
  private baseUrl = 'http://localhost:3000/api/product';
   /**
   * Constructor que inicializa el servicio
   */
  constructor(private httpClient: HttpClient) {
  }
  /**
  * Método para obtener todos los productos
  */
  obtenerTodosLosProductos(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/all`);
  }
  /**
   * Método para obtener un producto por su ID
   */
  obtenerProductoPorId(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}/search/${id}`);
  }
  /**
   * Método para crear un nuevo producto
  */
  crearProduct(producto: Product): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/create`, producto);
  }
  /**
   * Metodo para editar un producto existente
   */
  editarProduct(id: number, product: Product): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}/update/${id}`, product);
  }
  /**
   * Método para eliminar un producto por su ID
   */
  eliminarProducto(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/delete/${id}`);
  }
  /**
   * Método para obtener productos por categoría
   */
    obtenerProductosPorCategoria(categoryId: number): Observable<Product[]> {
      return this.httpClient.get<Product[]>(`${this.baseUrl}/search-by-category/${categoryId}`);
    }
}