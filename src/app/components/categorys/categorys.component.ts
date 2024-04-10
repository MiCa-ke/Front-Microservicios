import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/Category';
import { CategorysService } from '../../services/categorys.service';



@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrl: './categorys.component.css'
})
export class CategorysComponent implements OnInit {
  /**
   * Categorias a mostrar
   */
  public categorys: Category[] = [];
  /**
   * Constructor que inicia el componente de animes.
   */
  constructor(private categorysService: CategorysService) { }

    ngOnInit(): void{
      this.consultarCategorys();
    }
  /**
   * Funcion para consultar las categorias
   */
    consultarCategorys(){
      console.log('OJALA DE, POR FAVOR DIOSITO');

      this.categorysService.consultarCategory().subscribe(Response => {
        console.log(Response);
        this.categorys = Response;
      });
    }
}
