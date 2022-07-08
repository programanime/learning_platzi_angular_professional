import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({ 
  declarations: [ProductFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
