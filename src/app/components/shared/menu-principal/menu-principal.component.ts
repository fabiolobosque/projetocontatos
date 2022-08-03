import { Component, OnInit } from '@angular/core';
import { AuthHelper } from 'src/app/helpers/auth-helper';
import { NgxSpinnerService } from 'ngx-spinner';
import { Auth } from 'src/app/models/auth.model';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  //armazenar os dados do usuário autenticado
  auth: Auth | null = null;

  constructor(
    private authHelper: AuthHelper,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {

    this.auth = this.authHelper.getAuthData();
  }

  //função para fazer o logout do usuário
  logout() {
    if(window.confirm('Deseja sair da sua conta?')){
      
      this.authHelper.signOut();
      window.location.href = "/acessar-conta";
    }
  }

}
