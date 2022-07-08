import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ContactComponent } from "./contact/contact.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component"
import {LayoutComponent} from "./layout/layout.component"
import {AdminGuard} from "./admin.guard"
import { AdminRoutingModule } from "./admin/admin-routing.module";

const routes: Routes = [
    {
        path:"",
        component:LayoutComponent,
        children:[
            {
                path:"",
                redirectTo: "/home",
                pathMatch: "full"
            },
            {
                path: 'home',
                loadChildren: ()=> import("./home/home.module").then(m => m.HomeModule)
            },
            {
                path: 'contact',
                canActivate: [AdminGuard],
                component:ContactComponent
            },
            {
                path: 'products',
                loadChildren: ()=> import("./product/product.module").then(m => m.ProductModule)
            },
            {
                path: 'order',
                loadChildren: ()=> import("./order/order.module").then(m => m.OrderModule)
            }
        ]
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path:"**",
        component:PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
