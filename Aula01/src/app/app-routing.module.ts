import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotasComponent } from './rotas/rotas.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'rotas', component: RotasComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



