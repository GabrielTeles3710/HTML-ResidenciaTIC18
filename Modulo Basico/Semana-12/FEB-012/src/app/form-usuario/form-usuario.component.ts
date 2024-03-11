import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from './form-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrl: './form-usuario.component.css',

})
export class FormUsuarioComponent  {
  Formulario: FormGroup;
  generos: string[] = ["",'Masculino', 'Feminino'];
  profissoes: string[] = ["",'Estudante', 'Profissional', 'Outro'];
  inscricao:Subscription | undefined;
  constructor(private formService: FormService) {
    
    this.Formulario = new FormGroup({
      'Nome': new FormControl(null  , [Validators.required,Validators.maxLength(12)]),
      'Senha': new FormControl(null, [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$')]),
      'Email': new FormControl(null, [Validators.required,Validators.email]),
      'NomeCompleto': new FormControl(null, [Validators.required,Validators.pattern('.*\\s+.*')]),
      'Telefone': new FormControl(null, [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(11)]),
      'Endereco': new FormControl(null, [Validators.required]),
      'DTNS': new FormControl(null, [Validators.required,Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]),
      'Genero': new FormControl(null, [Validators.required]),
      'Profissao': new FormControl(null, [Validators.required])
    })
    this.formChanges();
    
  }
  formChanges() {
    this.Formulario.get('Nome')?.valueChanges.subscribe((valor: string) => this.formService.valueChanges("Nome => " + valor));
    this.Formulario.get('Senha')?.valueChanges.subscribe((valor: string) => this.formService.valueChanges("Senha => " + valor));
    this.Formulario.get('Email')?.valueChanges.subscribe((valor: string) => this.formService.valueChanges("Email => " + valor));
    this.Formulario.get('NomeCompleto')?.valueChanges.subscribe((valor: string) => this.formService.valueChanges("Nome Completo => " + valor));
    this.Formulario.get('Telefone')?.valueChanges.subscribe((valor: string) => this.formService.valueChanges("Telefone => " + valor));
    this.Formulario.get('Endereco')?.valueChanges.subscribe((valor: string) => this.formService.valueChanges("Endereco => " + valor));
    this.Formulario.get('DTNS')?.valueChanges.subscribe((valor: string) => this.formService.valueChanges("DTNS => " + valor));
    this.Formulario.get('Genero')?.valueChanges.subscribe((valor: string) => this.formService.valueChanges("Genero => " + valor));
    this.Formulario.get('Profissao')?.valueChanges.subscribe((valor: string) => this.formService.valueChanges("Profissao => " + valor));
    this.Formulario.statusChanges.subscribe((status: string) => this.formService.valueChanges(status))
  }
  onSubmit() {
    if (this.Formulario.valid) {
      console.log(this.Formulario.value);  
    }
    console.log(Error);
    
  }

}