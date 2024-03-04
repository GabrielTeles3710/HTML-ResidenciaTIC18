import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado-da-pesquisa',
  templateUrl: './resultado-da-pesquisa.component.html',
})
export class ResultadoDaPesquisaComponent {

  constructor() { }

  @Input() resultList: any[] = [];
  @Input() pesquisa: string = '';
}