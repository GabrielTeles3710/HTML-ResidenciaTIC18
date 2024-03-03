import { Component } from '@angular/core';
import { ApiService } from "../../ApiService";

@Component({
  selector: 'FEB-008',
  templateUrl: './FEB-008.component.html',
  styleUrl: './FEB-008.component.css'
})
export class FEB008Component {
  title = 'FEB-008';

  constructor(private ApiService: ApiService) { }

  resultList: any[] = [];
  pesquisa: string = '';

  async search(pesquisa: string): Promise<void> {
    try{
      this.ApiService.search(pesquisa)
      .then((resultado) =>{

        this.resultList = resultado;
      })
      .catch((error) => {
        console.error(error);
      });
    }
    catch{
    }
  }
}