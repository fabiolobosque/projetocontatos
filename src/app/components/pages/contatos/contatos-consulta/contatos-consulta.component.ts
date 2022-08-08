import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/services/contato.service';
import { Contato } from 'src/app/models/contato.models';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contatos-consulta',
  templateUrl: './contatos-consulta.component.html',
  styleUrls: ['./contatos-consulta.component.css']
})

export class ContatosConsultaComponent implements OnInit {

  //atributo
  listaContatos: Contato[] = [];
  pagina: number = 1;
  filtro: any = {nome: ''};
  mensagem: string = '';

  constructor(
    private contatoService: ContatoService,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {

    this.spinnerService.show;

    this.contatoService.getContatos()
      .subscribe({
        next: (result) => {
          this.spinnerService.hide;
          this.listaContatos = result;
        },
        error: (e) => {
          this.spinnerService.hide;
          console.log(e);
        }
      })
  }

  //função para o componente de paginação
  handlePageChange(event: any): void{
    this.pagina = event;
  }

  //função para poder excluir o contato
  onDelete(idContato: string): void {
   
    if(window.confirm('Deseja realmente excluir o contato selecionado?')) {
 
      this.spinnerService.show();
 
      this.contatoService.deleteContato(idContato)
        .subscribe({
          next: (result) => {
            this.spinnerService.hide();
            this.mensagem = `Contato ${result.nome} excluído com sucesso!`;
            this.ngOnInit();
          },
          error: (e) => {
            console.log(e);
            this.mensagem = "Não foi possível realizar a exclusão do contato.";
            this.spinnerService.hide();
          }
        });
    }
  }
}
