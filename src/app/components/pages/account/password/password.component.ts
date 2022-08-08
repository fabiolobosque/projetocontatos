import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  mensagem: string = '';

  constructor(
    private spinnerService: NgxSpinnerService,
    private usuarioService: UsuarioService
  ) { }

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

    this.spinnerService.show();
    this.mensagem = '';

    this.usuarioService.postPassword(this.formPassword.value)
      .subscribe({
        next: (result) => {
          this.mensagem = `Recuperação de senha para o usuário ${result.nome} realizada com sucesso.`;
          this.spinnerService.hide();
        },
        error: (e) => {
          // exibindo os valores dos campos do formulário no console
          console.log(e);
          this.mensagem = 'Não foi possível realizar a recuperação da senha.';
          this.spinnerService.hide();
        }
      });
  }

}
