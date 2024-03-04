import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrl: './form-usuario.component.css',

})
export class FormUsuarioComponent implements OnInit {
  Formulario: FormGroup;
  generos: string[] = ["",'Masculino', 'Feminino'];
  profissoes: string[] = ["",'Estudante', 'Profissional', 'Outro'];

  constructor() {
    this.Formulario = new FormGroup({
      'Nome': new FormControl(null, [Validators.required,Validators.maxLength(12),Validators.pattern(/^\$/)]),
      'Senha': new FormControl(null, [Validators.required,Validators.minLength(4),Validators.pattern(/.*\d.*[A-Z].*/)]),
      'Email': new FormControl(null, [Validators.required,Validators.email]),
      'NomeCompleto': new FormControl(null, [Validators.required,Validators.pattern('.*\\s+.*')]),
      'Telefone': new FormControl(null, [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(11)]),
      'Endereco': new FormControl(null, [Validators.required]),
      'DTNS': new FormControl(null, [Validators.required,Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]),
      'Genero': new FormControl(null, [Validators.required]),
      'Profissao': new FormControl(null, [Validators.required])
    })
  }
  ngOnInit() {
    
  }
  onSubmit() {
    if (this.Formulario.valid) {
      console.log(this.Formulario.value);  
    }
    console.log(Error);
  }

}