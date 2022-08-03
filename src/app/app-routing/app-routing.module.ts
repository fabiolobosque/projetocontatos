import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContatosGuard } from '../guards/contatos.guard';

// importando os componentes que serão mapeados com rotas
import { LoginComponent } from '../components/pages/account/login/login.component';
import { RegisterComponent } from '../components/pages/account/register/register.component';
import { PasswordComponent } from '../components/pages/account/password/password.component';
import { ContatosEdicaoComponent } from '../components/pages/contatos/contatos-edicao/contatos-edicao.component';
import { ContatosCadastroComponent } from '../components/pages/contatos/contatos-cadastro/contatos-cadastro.component';
import { ContatosConsultaComponent } from '../components/pages/contatos/contatos-consulta/contatos-consulta.component';


//mapeamento das rotas de cada componente
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'acessar-conta'},
  {path: 'acessar-conta', component: LoginComponent},
  {path: 'criar-conta', component: RegisterComponent},
  {path: 'recuperar-senha', component: PasswordComponent},  
  {path: 'contatos-edicao', component: ContatosEdicaoComponent, canActivate: [ContatosGuard]},
  {path: 'contatos-cadastro', component: ContatosCadastroComponent, canActivate: [ContatosGuard]},
  {path: 'contatos-consulta', component: ContatosConsultaComponent, canActivate: [ContatosGuard]}
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
