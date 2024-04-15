import { Routes } from '@angular/router';
import { CategorysComponent } from './components/categorys/categorys.component';
import { CategoryFormComponent } from './category-form/category-form.component';

export const routes: Routes = [
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: 'categorys', component: CategorysComponent},
    {path: 'category-create', component: CategoryFormComponent},
    {path: 'edit/:id', component: CategoryFormComponent }
];

