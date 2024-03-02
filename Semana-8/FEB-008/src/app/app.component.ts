import { Component } from '@angular/core';
import { ApiService } from "../app/ApiService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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