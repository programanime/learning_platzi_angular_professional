import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsContainer } from "./containers/products/products.container";
import { ProductsComponent } from "./components/products/products.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductEditComponent } from "./components/product-edit/product-edit.component";
import { ProductFormComponent } from "./components/product-form/product-form.component";


const routes: Routes = [
    {
        path: '',
        component:ProductsComponent
    },
    {
        path: 'products',
        component:ProductsContainer
    },
    {
        path: 'list',
        component:ProductListComponent
    },
    {
        path: 'create',
        component:ProductFormComponent
    },
    {
        path: 'edit/:id',
        component:ProductEditComponent
    },
    {
        path: ':id',
        component:ProductDetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
