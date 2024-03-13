import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PetshopServiceService {
  Atendimento: FormGroup;
  Tipo: string[] = ["",'Cão', 'Gato',"Ave","Roedor"];
  raca: string = "";
  ListaAtendimento: any = [];

  constructor(Atendimento: FormGroup) {
    this.ListaAtendimento = ;
  }
  onSubmit(){
    this.Atendimento = this.cadastarAtendimento();
    this.ListaAtendimento.push(this.Atendimento);
  }
  
  cadastarAtendimento(){
    var Atendimento = new FormGroup({
      'Nome': new FormControl(null  , [Validators.required,Validators.maxLength(12)]),
      'Especie': new FormControl(null, [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$')]),
      'Email': new FormControl(null, [Validators.required,Validators.email])
    })
    return Atendimento;
  }
}
