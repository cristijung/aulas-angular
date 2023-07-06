import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComponenteComponent } from './componente/componente.component';
import { EbindingComponent } from './ebinding/ebinding.component';
import { DinamicoComponent } from './dinamico/dinamico.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'componente', component: ComponenteComponent},
  {path: 'ebinding', component: EbindingComponent},
  {path: 'dinamico', component: DinamicoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
