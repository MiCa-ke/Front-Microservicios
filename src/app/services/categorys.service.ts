import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategorysService {
  /**
   * URLbase del servicio de categorías en el microservicio
   */
  private baseUrl = 'http://localhost:3000/api/category';
  /**
   * Constructor que inicializa el servicio
   */
  constructor(private httpClient: HttpClient) { 
  }
  /**
   * Metodo para obtener todas las categorias
   */
  consultarCategory() : Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.baseUrl}/all`);
  }
  /**
   * Metodo para buscar una categoria por su id
   */
  buscarCategoria(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${this.baseUrl}/search/${id}`);
  }
  /** 
   * Método para crear una nueva categoría
   */
  crearCategory(categoria: Category): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/create`, categoria);
  }
  /**
   * Método para editar una categoría existente
   */
  editarCategory(id: number, categoria: Category): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}/update/${id}`, categoria);
  }
  /**
   * Método para eliminar una categoría existente
   */
  eliminarCategory(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/delete/${id}`);
  }
  /**
   * Metodo para buscar productos por categoria
   */
  buscarProductosPorCategoria(categoryId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/search-product/${categoryId}`);
  }
}
