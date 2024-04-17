import { Routes } from '@angular/router';
import { CategorysComponent } from './components/categorys/categorys.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FacturaListComponent } from './factura-list/factura-list.component';
import { FacturaFormComponent } from './factura-form/factura-form.component';

export const routes: Routes = [
    {path: '', redirectTo: '', pathMatch: 'full'},
    //Categoria
    {path: 'categorys', component: CategorysComponent},
    {path: 'category-create', component: CategoryFormComponent},
    {path: 'edit/:id', component: CategoryFormComponent },
    //Producto
    {path: 'products', component: ProductListComponent},
    {path: 'product-create', component: ProductFormComponent},
    {path: 'edit-product/:id', component: ProductFormComponent},
    //Factura
    {path: 'facturas', component: FacturaListComponent},
    {path: 'factura-creada', component: FacturaFormComponent},
    {path: 'detallefactura/:id', component: FacturaFormComponent}
];