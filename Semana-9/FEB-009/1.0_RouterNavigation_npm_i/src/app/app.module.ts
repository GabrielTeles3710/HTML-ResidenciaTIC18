import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { FEB006Component } from './Components/FEB-006/FEB-006.component';
import { DestaquesComponent } from './Components/FEB-006/destaques/destaques.component';
import { FooterComponent } from './Components/FEB-006/footer/footer.component';
import { CorpoComponent } from './Components/FEB-006/corpo/corpo.component';
import { MenuComponent } from './Components/FEB-006/menu/menu.component';
import { NoticiasComponent } from './Components/FEB-006/noticias/noticias.component';
import { ResultadosComponent } from './Components/FEB-006/resultados/resultados.component';
import { ServicosComponent } from './Components/FEB-006/servicos/servicos.component';
import { FEB007Component } from './Components/FEB-007/FEB-007.component';
import { CarrinhoComponent } from './Components/FEB-007/carrinho/carrinho.component';
import { ClassesComponent } from './Components/FEB-007/classes/classes.component';
import { ObjectsComponent } from './Components/FEB-007/objects/objects.component';
import { PropertiesComponent } from './Components/FEB-007/properties/properties.component';
import { ValuePropertieComponent } from './Components/FEB-007/value-propertie/value-propertie.component';
import { BodyDirectiveDirective } from './directives/body-directive.directive';
import { CarrinhoDirectiveDirective } from './directives/carrinho-directive.directive';
import { TextContentDirectiveDirective } from './directives/text-content-directive.directive';
import { TextTitleDirectiveDirective } from './directives/text-title-directive.directive';
import { TitleDirectiveDirective } from './directives/title-directive.directive';
import { FEB008Component } from './Components/FEB-008/FEB-008.component';
import { NegritoPipe } from './negrito.pipe';
import { BarraDeBuscaComponent } from './Components/FEB-008/barra-de-busca/barra-de-busca.component';
import { ResultadoDaPesquisaComponent } from './Components/FEB-008/resultado-da-pesquisa/resultado-da-pesquisa.component';

const routes: Routes = [
  { path: 'FEB-006', component: FEB006Component },
  { path: 'FEB-007', component: FEB007Component },
  { path: 'wikipediaPage', component: FEB008Component }
];

@NgModule({
  declarations: [
    AppComponent,
    FEB006Component,
    FEB007Component,
    FEB008Component,
    DestaquesComponent,
    FooterComponent,
    CorpoComponent,
    MenuComponent,
    NoticiasComponent,
    ResultadosComponent,
    ServicosComponent,
    CarrinhoComponent,
    ClassesComponent,
    ObjectsComponent,
    PropertiesComponent,
    ValuePropertieComponent,
    BodyDirectiveDirective,
    CarrinhoDirectiveDirective,
    TextContentDirectiveDirective,
    TextTitleDirectiveDirective,
    TitleDirectiveDirective,
    NegritoPipe,
    BarraDeBuscaComponent,
    ResultadoDaPesquisaComponent
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