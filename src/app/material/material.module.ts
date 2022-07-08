import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';




@NgModule({
       schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatStepperModule,
    MatInputModule
  ],
  exports:[
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatBadgeModule,
      MatToolbarModule,
      MatTableModule,
      MatIconModule,
      MatFormFieldModule,
      MatStepperModule,
      MatInputModule
  ]
})
export class MaterialModule { }
