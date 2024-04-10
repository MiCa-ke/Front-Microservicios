import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategorysService {

  /**
   * URL base del microservicio categoria
   */
  private baseUrl = 'http://localhost:8080/api/category';
  /**
   * Constructor que inicializa el servicio
   */
  constructor(private httpClient: HttpClient) { 
  }
  /**
   * Permite ver todas las categorias
   */
  consultarCategory() : Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.baseUrl}/all`);
  }

}
