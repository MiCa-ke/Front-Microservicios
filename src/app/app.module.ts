import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CategorysComponent } from './components/categorys/categorys.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = []; 


@NgModule({
  declarations: [
    CategorysComponent,
    CategoryFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
})
export class ModuloModule { }

import { bootstrapApplication } from '@angular/platform-browser';
import { CategoryFormComponent } from './category-form/category-form.component';

bootstrapApplication(AppComponent);
