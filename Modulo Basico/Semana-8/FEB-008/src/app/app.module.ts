import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BarraDeBuscaComponent } from './barra-de-busca/barra-de-busca.component';
import { ResultadoDaPesquisaComponent } from './resultado-da-pesquisa/resultado-da-pesquisa.component';
import { NegritoPipe } from './negrito.pipe'

@NgModule({
  declarations: [
    AppComponent,
    BarraDeBuscaComponent,
    ResultadoDaPesquisaComponent,
    NegritoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
