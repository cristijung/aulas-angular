import { Component } from '@angular/core';

@Component({
  selector: 'app-rotas',
  templateUrl: './rotas.component.html',
  styleUrls: ['./rotas.component.scss'],
})
export class RotasComponent {
  title = 'Aula01';
  nome: string = 'Pafúncio';

  atualizarNome() {
    this.nome = 'Felisberta';
  }
  description = 'Angular';
  url =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png';
}
