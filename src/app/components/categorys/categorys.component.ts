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
   * Objeto para almacenar la nueva categoría a crear
   */
  public newCategory: Category = new Category('','');
  /**
   * Variable para almacenar la categoría seleccionada para editar
   */
  public selectedCategory: Category | null = null;


  /**
   * Constructor que inicia el componente de categorias.
   */
  constructor(private categorysService: CategorysService) { }

    ngOnInit(): void{
      this.consultarCategorys();
    }

    
  /**
   * Funcion para consultar las categorias muestra las categorias
   */
    consultarCategorys(){
      //console.log('SI, DIO <3');
      this.categorysService.consultarCategory().subscribe(
        Response => { console.log(Response);
        this.categorys = Response;
      });
    }

    crearCategory() {
      this.categorysService.crearCategory(this.newCategory).subscribe(
        (response) => {
          console.log('Categoría creada:', response);
          // Limpiar el objeto para crear una nueva categoría
          this.newCategory = new Category('','');
          // Actualizar la lista de categorías
          this.consultarCategorys();
        },
        (error) => {
          console.error('Error al crear la categoría:', error);
        }
      );
    } 

    editarCategory() {
      if (this.selectedCategory  && this.selectedCategory.id !== undefined) {
        this.categorysService.editarCategory(this.selectedCategory.id, this.selectedCategory).subscribe(
          (response) => {
            console.log('Categoría editada:', response);
            // Reiniciar la variable de categoría seleccionada
            this.selectedCategory = null;
            // Actualizar la lista de categorías
            this.consultarCategorys();
          },
          (error) => {
            console.error('Error al editar la categoría:', error);
          }
        );
      }
    }

    eliminarCategory(id: number) {
      if (confirm('¿Estás seguro de que deseas eliminar esta categoría?')) {
        this.categorysService.eliminarCategory(id).subscribe(
          (response) => {
            console.log('Categoría eliminada:', response);
            // Actualizar la lista de categorías
            this.consultarCategorys();
          },
          (error) => {
            console.error('Error al eliminar la categoría:', error);
          }
        );
      }
    }

    seleccionarCategoriaParaEditar(category: Category) {
      // Clonar la categoría seleccionada para evitar cambios directos en la lista
      this.selectedCategory = { ...category };
    }
  
    cancelarEdicion() {
      // Reiniciar la variable de categoría seleccionada
      this.selectedCategory = null;
    }
}
