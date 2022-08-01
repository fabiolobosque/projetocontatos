import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordMatchValidator } from 'src/app/validators/password-match.validator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    // declarando e inicializando o HttpClient para injeção de dependencia
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

    // construir a estrutura do nosso formulário
    formRegister = new FormGroup({
      //campo nome
      nome: new FormControl('', [Validators.required, Validators.minLength(8)]),
      //campo email
      email: new FormControl('', [Validators.required, Validators.email]),
      //campo senha
      senha: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      //campo confirmarSenha
      confirmarSenha: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])

    },
      //incluir validações customizadas. Tem que ser depois das padronizadas. Será incluida através da chamada validators
      {
        validators: [PasswordMatchValidator.MatchPassword]
      }
    );
  
    //função para acessar e exibir os erros de validação do formulário
    get formularioRegister(): any{
      return this.formRegister.controls;
    }
  
    // função para capturar o SUBMIT do formulário
    onSubmit() : void{
      // exibindo os valores dos campos do formulário no console
      // não será mais utilizado pois será utilizado API - console.log(this.formRegister.value);
      this.httpClient.post('http://contatosapi-001-site1.atempurl.com/api/register', this.formRegister.value)
        .subscribe({
          //capturar o retorno de sucesso (qualqeur HTTP na faixa de 2xx)
          next: (data) => {
            console.log(data);
          },
          //capturar o retorno de erro (qualqeur HTTP na faixa de 2xx)
          error: (e) => {
            console.log(e.error);
          }

        });
    }

}
