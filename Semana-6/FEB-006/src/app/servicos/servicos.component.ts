import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent implements OnInit {
  Tempo: any = [];
  async getWeatherData(lat: number,lon : number): Promise<any> {
    const API_KEY = 'e77bfde73297c92ac126c4dedb8c75b8';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const temperatura = data.main.temp -273.15;
        if (response.ok) {
            const weatherInfo = {
                cidade: data.name,
                temperatura: temperatura.toFixed(1)+" C",
                clima: data.weather[0].description,
                umidade: data.main.humidity+"%",
            };
            this.Tempo.push("Cidade: " + weatherInfo.cidade);
            this.Tempo.push("Temperatura: " + weatherInfo.temperatura);
            this.Tempo.push("Clima: " + weatherInfo.clima);
            this.Tempo.push("Umidade " + weatherInfo.umidade);
            return weatherInfo;
          } else {
            throw new Error('Não foi possível obter os dados da API OpenWeatherMap');
        }
    } catch (error) {
        console.error('Erro ao obter os dados:', error);
        throw new Error('Erro ao obter os dados da API OpenWeatherMap');
    }

}
// Chamada da função
async fetchWeatherAndDisplay() {
  try {
      const weatherData = await this.getWeatherData(-14.79, -39.17);
      console.log('Informações meteorológicas:', weatherData);
    } catch (err) {
      // Lidar com erros
      console.error(err);
  }
}
ngOnInit(): void {
  this.fetchWeatherAndDisplay();
}
}
