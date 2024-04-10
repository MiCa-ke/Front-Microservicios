import { Routes } from '@angular/router';
import { CategorysComponent } from './components/categorys/categorys.component';

export const routes: Routes = [
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: 'categorys', component: CategorysComponent}
];

