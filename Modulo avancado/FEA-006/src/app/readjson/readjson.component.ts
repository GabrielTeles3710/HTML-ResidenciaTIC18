import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Form } from '@angular/forms';

/* 
https://dontpad.com/lobinhofront

*/
@Component({
  selector: 'app-readjson',
  templateUrl: './readjson.component.html',
  styleUrl: './readjson.component.css'
})
export class ReadjsonComponent implements OnInit {
constructor(private http: HttpClient){
};
countries: any = [];
campos_dos_form: any = [{tipo: "text", nome: "nome",rotulo: "rotulo"}];
url: string = "https://restcountries.com/v3.1/all";

getCountries(){
 return this.http.get<any[]>(this.url).pipe(map(data => data));
}
ngOnInit() {    
  this.http.get(this.url).subscribe(countries => console.log(countries));
  this.getCountries().subscribe(countries => {this.countries = Object.keys(countries[0]); console.log(Object.keys(countries[0]))});
}
}


