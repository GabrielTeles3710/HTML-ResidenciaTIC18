import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { findIndex } from 'rxjs';
import { Service } from './service.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'FEB-010';

  objetoAtual: string = '';
  inscricao:Subscription | undefined;

  constructor(public http: HttpClient, private Service:Service) {
    this.inscricao = this.Service.objetoAtualSubject.subscribe(objeto =>{
      this.objetoAtual = objeto
    })
  }

  ngOnInit(): void {
    this.Service.initialize()
  }

  comprar() {
    this.Service.comprar()
  }
}