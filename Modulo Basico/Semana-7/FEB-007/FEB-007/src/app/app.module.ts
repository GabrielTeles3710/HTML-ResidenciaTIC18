import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ClassesComponent } from './classes/classes.component';
import { ObjectsComponent } from './objects/objects.component';
import { PropertiesComponent } from './properties/properties.component';
import { ValuePropertieComponent } from './value-propertie/value-propertie.component';

import { TitleDirectiveDirective } from './directives/title-directive.directive';
import { BodyDirectiveDirective } from './directives/body-directive.directive';
import { TextContentDirectiveDirective } from './directives/text-content-directive.directive';
import { TextTitleDirectiveDirective } from './directives/text-title-directive.directive';
import { CarrinhoDirectiveDirective } from './directives/carrinho-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    ClassesComponent,
    ObjectsComponent,
    PropertiesComponent,
    ValuePropertieComponent,
    TitleDirectiveDirective,
    BodyDirectiveDirective,
    TextContentDirectiveDirective,
    TextTitleDirectiveDirective,
    CarrinhoDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }