import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContatoService } from 'src/app/services/contato.services';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertaMensagensComponent } from 'src/app/components/shared/alerta-mensagens/alerta-mensagens.component';

@Component({
  selector: 'app-contatos-cadastro',
  templateUrl: './contatos-cadastro.component.html',
  styleUrls: ['./contatos-cadastro.component.css']
})

  
export class ContatosCadastroComponent implements OnInit {
 
  //atributo
  mensagem: string = '';
 
  constructor(
    private contatoService: ContatoService,
    private spinnerService: NgxSpinnerService
  ) { }
 
  ngOnInit(): void {
  }
 
  formContato = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl('', [Validators.required]),
  });
 
  get form(): any {
    return this.formContato.controls;
  }
 
  onSubmit(): void {
 
    this.spinnerService.show();
    this.mensagem = '';
 
    this.contatoService.postContato(this.formContato.value)
      .subscribe({
        next: (result) => {
          this.spinnerService.hide();
          this.formContato.reset();
 
          this.mensagem = `Contato "${result.nome}" cadastrado com sucesso.`
        },
        error: (e) => {
          this.spinnerService.hide();
          console.log(e);
        }
      })
  }
}  
