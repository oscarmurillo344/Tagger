import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';


const ModuloMaterial=[
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatInputModule,
  MatListModule
];

@NgModule({
  imports: [
    CommonModule,
    ModuloMaterial
  ],
  exports: [
    ModuloMaterial
  ]
})
export class MaterialModule { }
