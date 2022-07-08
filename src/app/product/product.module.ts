import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../material/material.module";

import { ProductRoutingModule } from "./product-routing.module"


import { ProductDetailComponent } from "./components/product-detail/product-detail.component"
import { ProductsComponent } from "./components/products/products.component"
import { ProductsContainer } from "./containers/products/products.container"
import { ProductComponent } from "./components/product/product.component"
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component'

@NgModule({
    declarations: [
        ProductsComponent,
        ProductDetailComponent,
        ProductComponent,
        ProductListComponent,
        ProductFormComponent,
        ProductsContainer,
        ProductEditComponent
    ],
    imports:[
        ProductRoutingModule,
        CommonModule,
        MaterialModule,
        ReactiveFormsModule
    ]
})
export class ProductModule { }