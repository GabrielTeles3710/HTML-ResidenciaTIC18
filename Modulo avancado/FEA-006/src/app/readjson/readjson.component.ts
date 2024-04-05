import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-readjson',
  //templateUrl: './readjson.component.html',
  template: `<form [formGroup]="formulario" (ngSubmit)="onSubmit()">
  <div *ngFor="let campo of campos_do_form"> <label>{{campo.rotulo}}</label>
  <input [type]="campo.tipo" [formControlName]="campo.nome"> </div>
  <button type="submit">Enviar</button>
  </form>`
})
export class ReadjsonComponent implements OnInit {

  constructor(private http: HttpClient ,private fb: FormBuilder) { 
  this.formulario = this.fb.group({});this.campos_do_form.forEach(campo => {this.formulario.addControl(campo.nome, this.fb.control(''))})
};

formulario: FormGroup;
countries: any = [];
campos_do_form: Array<{tipo: string, nome:string, rotulo: string}> = []; //Object.keys(countries[0])
url: string = "https://restcountries.com/v3.1/all";

getCountries(){
 return this.http.get<any[]>(this.url).pipe(map(data => data));
}
ngOnInit() {    
  this.http.get(this.url).subscribe(countries => console.log(countries));
  this.getCountries().subscribe(countries => {this.countries = Object.keys(countries[0]); console.log(Object.keys(countries[0]));
    Object.keys(countries[0]).forEach(countries => {
    this.campos_do_form.push({tipo: "text",nome: countries.toString(), rotulo: countries.toString()})})});
}
onSubmit(){

}

}


