import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent {
  @Input() description = '';
  @Input() url = '';

  cats: any[] = [];

  constructor(http: HttpClient) {
    http
      .get<any[]>('https://api.thecatapi.com/v1/images/search?limit=10')
      .subscribe((data) => {
        this.cats = data;
      });
  }
}
