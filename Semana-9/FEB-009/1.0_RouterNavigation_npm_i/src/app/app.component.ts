import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FEB-010';
  rota: string = '';
  constructor(private rotas: Router, private rotaAtiva: ActivatedRoute){
  }
  FEB006() {
    this.rotas.navigate(['FEB006']);
  }
  FEB007() {
    this.rotas.navigate(['FEB007']);
  }
  FEB008() {
    this.rotas.navigate(['FEB008']);
  }
  fechar() {
    this.rotas.navigate(['']);
  }
}