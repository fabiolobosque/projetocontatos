import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 

  // construir a estrutura do nosso formulário
  formLogin = new FormGroup({
    //campo email
    email: new FormControl('', [Validators.required, Validators.email]),
    //campo senha
    senha: new FormControl('', [Validators.required])
  });

  //função para acessar e exibir os erros de validação do formulário
  get formularioLogin(): any{
    return this.formLogin.controls;
  }

  // função para capturar o SUBMIT do formulário
  onSubmit() : void{
    // exibindo os valores dos campos do formulário no console
    console.log(this.formLogin.value);
  }


}
