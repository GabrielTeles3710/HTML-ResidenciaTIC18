import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FEB-009';
  rota: string = '';
  constructor(private rotas: Router, private rotaAtiva: ActivatedRoute){
  }
  PaginaFEB006() {
    this.rotas.navigate(['PaginaFEB006']);
  }
  PaginaFEB007() {
    this.rotas.navigate(['PaginaFEB007']);
  }
  PaginaFEB008() {
    this.rotas.navigate(['PaginaFEB008']);
  }
  fechar() {
    this.rotas.navigate(['']);
  }
}
