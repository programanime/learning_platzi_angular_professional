import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from "./components/banner/banner.component"
import { HomeComponent } from "./home.component"
import { HomeRoutingModule } from "./home-routing.module"

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports:[
      HomeRoutingModule,
      CommonModule
    ]
})
export class HomeModule { }