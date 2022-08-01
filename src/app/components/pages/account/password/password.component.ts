import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   // construir a estrutura do nosso formulário
   formPassword = new FormGroup({
    //campo email
    email: new FormControl('', [Validators.required, Validators.email])
  });

  //função para acessar e exibir os erros de validação do formulário
  get formularioPassword(): any{
    return this.formPassword.controls;
  }

  // função para capturar o SUBMIT do formulário
  onSubmit() : void{
    // exibindo os valores dos campos do formulário no console
    console.log(this.formPassword.value);
  }

}
