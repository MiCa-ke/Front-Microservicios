import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/Category';
import { CategorysService } from '../../services/categorys.service';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-categorys',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './categorys.component.html',
  styleUrl: './categorys.component.css'
})
export class CategorysComponent implements OnInit {
  /**
   * Categorias a mostrar
   */
  public categorys: Category[] = [];
  /**
   * Constructor que inicia el componente de categorias.
   */
  constructor(private categorysService: CategorysService) { }

    ngOnInit(): void{
      this.loadAll();
    }
  /**
   * Funcion para consultar las categorias muestra las categorias
   */
    loadAll(){
      //console.log('SI, DIO <3');
      this.categorysService.consultarCategory()
        .subscribe(Response => { 
        this.categorys = Response;
      });
    }

    eliminarCategory(category: Category) {
      if (category.id !== undefined){
        this.categorysService.eliminarCategory(category.id)
          .subscribe(() => {
            this.loadAll();
          })
      }
    }

}
