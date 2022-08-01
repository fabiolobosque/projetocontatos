import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private spinnerService: NgxSpinnerService,
    private usuarioService: UsuarioService

  ) { }

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
    this.spinnerService.show();

    this.usuarioService.postLogin(this.formLogin.value)
      .subscribe({
        next: (auth) => {
          // exibindo os valores dos campos do formulário no console
          console.log(auth);
          this.spinnerService.hide();
        },
        error: (e) => {
          // exibindo os erros dos campos do formulário no console
          console.log(e.error);
          this.spinnerService.hide();
        }
      })
    

  }


}
