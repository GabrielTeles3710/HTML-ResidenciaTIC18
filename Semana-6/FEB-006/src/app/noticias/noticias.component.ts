import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent implements OnInit {
  artigos: any = [];
  noticias: any = [];
  async getNews(): Promise<any> {
    try{
      const apiKey : string = '6f489135b89cde56496d9d0c27a8b1d8';
      const q : string = '(universidade AND tecnologia AND educação) OR (universidade AND tecnologia)';
      const lang : string = 'pt';
      const country : string = 'br';
      const max : string = '10';
      const url = `https://gnews.io/api/v4/search?q=${q}&lang=${lang}&country=${country}&max=${max}&apikey=${apiKey}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Erro ao buscar notícias.');
      }
      const news = await response.json();
      return news;
    } 
    catch (error) {
      throw new Error(`Erro na requisição: ${(error as Error).message}`);
    }
  }  
    ngOnInit(): void {
      this.getNews().then((news) => {console.log(news);
        this.artigos = news.articles;
        const noticiaMaxString : number = 30;
        let numArtigo : number = 0;
        //NOTICIAS
        let noticias : number = 2;

        for(let i = 0; i < noticias; i++){          
          let titulo : string = this.artigos[numArtigo].title;
          if(titulo.length > noticiaMaxString){
            titulo = titulo.substring(0, noticiaMaxString) + "...";
          }
  
          let subtitulo : string = this.artigos[numArtigo].description;
          if(subtitulo.length > noticiaMaxString){
            subtitulo = subtitulo.substring(0, noticiaMaxString) + "...";
          }
          
           let noticia =
          `
          ${titulo}
          <ul><li><a href='${this.artigos[numArtigo++].url}'>${subtitulo}</a></li></ul>
          `
          this.noticias.push(noticia);
        };}).catch((error) => {console.error(error);});};   
}
