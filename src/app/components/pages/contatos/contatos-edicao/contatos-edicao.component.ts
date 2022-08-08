import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Contato } from 'src/app/models/contato.models';
import { ContatoService } from 'src/app/services/contato.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contatos-edicao',
  templateUrl: './contatos-edicao.component.html',
  styleUrls: ['./contatos-edicao.component.css']
})
export class ContatosEdicaoComponent implements OnInit {

  mensagem: string = '';
  contato: Contato = new Contato;

  constructor(
    private contatoService: ContatoService,
    private spinnerService: NgxSpinnerService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.spinnerService.show();
    //capturar o id enviado pela URL (rota)
    var idContato = this.activatedRoute.snapshot.paramMap.get('id') as string;

    //consultar os dados do contato na API através do ID
    this.contatoService.getContatoPorId(idContato)
      .subscribe({
        next: (result) => {
          this.spinnerService.hide();
          this.formContato.patchValue(result);
        },
        error: (e) => {
          this.spinnerService.hide();
          console.log(e);
        }
      })
  }
  
  formContato = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl('', [Validators.required]),
    idContato: new FormControl('', [Validators.required]),
  });
 
  get form(): any {
    return this.formContato.controls;
  }

  onSubmit(): void {
 
    this.spinnerService.show();
    this.mensagem = '';
 
    this.contatoService.putContato(this.formContato.value)
      .subscribe({
        next: (result) => {
          this.spinnerService.hide();
 
          this.mensagem = `Contato "${result.nome}" foi atualziado com sucesso.`
        },
        error: (e) => {
          this.spinnerService.hide();
          console.log(e);
        }
      })
  }
 

}
