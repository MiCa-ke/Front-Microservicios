import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CategorysComponent } from './components/categorys/categorys.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatOptionModule } from '@angular/material/core';
import { FacturaListComponent } from './factura-list.component';

const routes: Routes = []; 

@NgModule({
  declarations: [
    CategorysComponent,
    CategoryFormComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [],
})
export class ModuloModule { }
export class ProductFormModule { }
export class FacturaListModule { }

import { bootstrapApplication } from '@angular/platform-browser';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ProductFormComponent } from './product-form/product-form.component';

bootstrapApplication(AppComponent);
