import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PrincipalComponent } from './Componentes/principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalstorageService } from './Servicios/Localstorage.service';
import { TokenService } from './Servicios/token.service';
import { BusquedaComponent } from './Componentes/busqueda/busqueda.component';
import { MaterialModule } from '../Modulo-Material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaCodigoComponent } from './componentes/tabla-codigo/tabla-codigo.component';
import { MockupService } from './Servicios/mockup.service';

@NgModule({
  declarations: [
    PrincipalComponent,
    BusquedaComponent,
    TablaCodigoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    MockupService,
    LocalstorageService,
    TokenService
  ],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
