import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FEB006Component } from './Components/feb-006/feb-006.component';
import { FEB007Component } from './Components/feb-007/feb-007.component';
import { FEB008Component } from './Components/feb-008/feb-008.component';
import { CorpoComponent } from './Components/feb-006/corpo/corpo.component';
import { DestaquesComponent } from './Components/feb-006/destaques/destaques.component';
import { FooterComponent } from './Components/feb-006/footer/footer.component';
import { MenuComponent } from './Components/feb-006/menu/menu.component';
import { NoticiasComponent } from './Components/feb-006/noticias/noticias.component';
import { ResultadosComponent } from './Components/feb-006/resultados/resultados.component';
import { ServicosComponent } from './Components/feb-006/servicos/servicos.component';
import { UniversidadeComponent } from './Components/feb-006/universidade/universidade.component';
import { CarrinhoComponent } from './Components/feb-007/carrinho/carrinho.component';
import { ClassesComponent } from './Components/feb-007/classes/classes.component';
import { ObjectsComponent } from './Components/feb-007/objects/objects.component';
import { PropertiesComponent } from './Components/feb-007/properties/properties.component';
import { ValuePropertieComponent } from './Components/feb-007/value-propertie/value-propertie.component';
import { BarraDeBuscaComponent } from './Components/feb-008/barra-de-busca/barra-de-busca.component';
import { ResultadoDaPesquisaComponent } from './Components/feb-008/resultado-da-pesquisa/resultado-da-pesquisa.component';


import { BodyDirectiveDirective } from './directives/body-directive.directive';
import { CarrinhoDirectiveDirective } from './directives/carrinho-directive.directive';
import { TextContentDirectiveDirective } from './directives/text-content-directive.directive';
import { TextTitleDirectiveDirective } from './directives/text-title-directive.directive';
import { TitleDirectiveDirective } from './directives/title-directive.directive';
import { NegritoPipe } from './negrito.pipe';

const routes: Routes = [
  { path: 'PaginaFEB006', component: FEB006Component },
  { path: 'PaginaFEB007', component: FEB007Component },
  { path: 'PaginaFEB008', component: FEB008Component }
];
@NgModule({
  declarations: [
    AppComponent,
    FEB006Component,
    FEB007Component,
    FEB008Component,
    CorpoComponent,
    DestaquesComponent,
    FooterComponent,
    MenuComponent,
    NoticiasComponent,
    ResultadosComponent,
    ServicosComponent,
    UniversidadeComponent,
    CarrinhoComponent,
    ClassesComponent,
    ObjectsComponent,
    PropertiesComponent,
    ValuePropertieComponent,
    BarraDeBuscaComponent,
    ResultadoDaPesquisaComponent,
    BodyDirectiveDirective,
    CarrinhoDirectiveDirective,
    TextContentDirectiveDirective,
    TextTitleDirectiveDirective,
    TitleDirectiveDirective,
    NegritoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
