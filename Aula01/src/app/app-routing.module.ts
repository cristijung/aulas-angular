import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotasComponent } from './rotas/rotas.component';

const routes: Routes = [
  {path: 'rotas', component: RotasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



