import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordMatchValidator } from 'src/app/validators/password-match.validator';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // atributos de mensagem retornadas pelas APIS
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';

  constructor(
    // declarando e inicializando o HttpClient para injeção de dependencia
    private httpClient: HttpClient,
    private spinnerService: NgxSpinnerService,
    private serviceUsuario: UsuarioService
    
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

      this.spinnerService.show();

      this.mensagem_sucesso = '';
      this.mensagem_erro = '';
      // exibindo os valores dos campos do formulário no console
      // Executando chamada da API através doo MiddleWare
      this.serviceUsuario.postRegister(this.formRegister.value)
        .subscribe({
          //capturar o retorno de sucesso (qualqeur HTTP na faixa de 2xx)
          next: (usuario) => {
            this.spinnerService.hide();
            this.mensagem_sucesso = `Usuário ${usuario.nome}, cadastrado com sucesso`
            this.formRegister.reset();  // limpa campos do formulário
            
            //console.log(data);
          },
          //capturar o retorno de erro (HTTP 4xx, 5xx)
          error: (e) => {
            switch(e.status){
              case 422:
                this.mensagem_erro = e.error.message;
                break;
              default:
                this.mensagem_erro = 'Falha ao realizar cadastro, por favor tente mais tarde.'  ;
                break;
            }

            this.spinnerService.hide();
          }

        });
    }

}
