import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './Componentes/principal/principal.component';

const routes: Routes = [
  { path:'inicio', component: PrincipalComponent },
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'**', component:PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
