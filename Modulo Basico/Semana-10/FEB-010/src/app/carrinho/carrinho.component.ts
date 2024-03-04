import { Component, Input } from '@angular/core';
import { Service } from '../service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {
  inscricao:Subscription | undefined;
  value: any[] = [];

  constructor(private comunicacaoService:Service) { 
    this.inscricao = this.comunicacaoService.listaCarrinhoSubject.subscribe(listaCarrinho =>{
      this.value = listaCarrinho
    })
  }
}