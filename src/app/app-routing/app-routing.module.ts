import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// importando os componentes que serão mapeados com rotas
import { LoginComponent } from '../components/pages/account/login/login.component';
import { RegisterComponent } from '../components/pages/account/register/register.component';
import { PasswordComponent } from '../components/pages/account/password/password.component';
import { ContatosEdicaoComponent } from '../components/pages/contatos/contatos-edicao/contatos-edicao.component';
import { ContatosCadastroComponent } from '../components/pages/contatos/contatos-cadastro/contatos-cadastro.component';
import { ContatosConsultaComponent } from '../components/pages/contatos/contatos-consulta/contatos-consulta.component';
import { ContatosGuard } from '../guards/contatos.guard';
import { AccountGuard } from '../guards/account.guard';


//mapeamento das rotas de cada componente
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'acessar-conta'},
  {path: 'acessar-conta', component: LoginComponent, canActivate: [AccountGuard]},
  {path: 'criar-conta', component: RegisterComponent, canActivate: [AccountGuard]},
  {path: 'recuperar-senha', component: PasswordComponent, canActivate: [AccountGuard]},  
  {path: 'contatos-edicao/:id', component: ContatosEdicaoComponent, canActivate: [ContatosGuard]},
  {path: 'contatos-cadastro', component: ContatosCadastroComponent, canActivate: [ContatosGuard]},
  {path: 'contatos-consulta', component: ContatosConsultaComponent, canActivate: [ContatosGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
