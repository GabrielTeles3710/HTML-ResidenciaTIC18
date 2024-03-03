import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { findIndex } from 'rxjs';

@Component({
  selector: 'FEB-007',
  templateUrl: './FEB-007.component.html',
  styleUrl: './FEB-007.component.css'
})
export class FEB007Component implements OnInit {
  title = 'FEB-007';

  urlToJson = 'assets/veiculos.json';
  result: any;

  classes: string[] = [];
  classeAtual: string = '';

  objects: string[] = [];
  objetoAtual: string = ''
  
  properties: string[] = [];
  propriedadeAtual: string = '';

  valuePropertie: string = '';
  
  listaCarrinho: string[] = [];

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
      this.classes = Object.keys(this.result);
    });
  }

  selecionarClasse(classe: string): void {
    this.objects = [];
    this.properties = [];

    this.classeAtual = classe;
    this.objetoAtual = '';
    this.propriedadeAtual = ''
    this.valuePropertie = '';

    let listObjects: any[] = []
    listObjects = this.result[this.classeAtual];

    listObjects.forEach(element => {
      this.objects.push(element.Name)
    });
  }

  selecionarObjeto(objeto: string): void {
    this.properties = [];

    this.objetoAtual = objeto;
    this.propriedadeAtual = ''
    this.valuePropertie = '';

    let listProperties: any[] = []
    const objects = this.result[this.classeAtual]
    let index = objects.findIndex((obj: any) => obj.Name === this.objetoAtual)

    listProperties = this.result[this.classeAtual][index];
    this.properties = Object.keys(listProperties)
  }

  selecionarPropriedade(propriedade: string): void {
    this.propriedadeAtual = propriedade;
    
    let index = this.result[this.classeAtual].findIndex((obj: any) => obj.Name === this.objetoAtual)
    this.valuePropertie = this.result[this.classeAtual][index][this.propriedadeAtual]
  }

  comprar(): void{
    if(this.objetoAtual=="")
      return;

    this.listaCarrinho.push(this.objetoAtual);
  }
}''