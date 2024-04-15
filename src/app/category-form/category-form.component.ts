import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategorysService } from '../services/categorys.service';
import { Category } from '../model/Category';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})

export class CategoryFormComponent implements OnInit{

  private fb = inject(FormBuilder);
  private categoryService = inject(CategorysService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  form?: FormGroup;
  category?: Category;

  /**
   * Obtiene los datos(id) de la categoria 
   */
  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      console.log('id', id);

      if (id){
        this.categoryService.buscarCategoria(parseInt(id))
          .subscribe(category =>{
            this.category = category;
            this.form = this.fb.group({
              nombre: [category.name,],
              descripcion: [category.descripcion, [Validators.required]]
            });
          })
       }else {
        this.form = this.fb.group({
          nombre: ['',],
          descripcion: ['', [Validators.required]]
      });
    }
  }

  save() {
    const { nombre, descripcion } = this.form!.value;
    const categoryData = {
      descripcion,
      name: nombre // Mapea "nombre" a "name" para que coincida con la API
    };
    //console.log('Datos a enviar:', categoryData); // Agregar console.log()

    if (this.category && this.category.id !== undefined){
      this.categoryService.editarCategory(this.category.id, categoryData)
        .subscribe(() => {
          this.router.navigate(['/categorys']);
      });
    } else {
      this.categoryService.crearCategory(categoryData)
        .subscribe(() => {
          this.router.navigate(['/categorys']);
      });
    }
  }
}
