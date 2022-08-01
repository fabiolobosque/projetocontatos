import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// importando os componentes que serão mapeados com rotas
import { LoginComponent } from '../components/pages/account/login/login.component';
import { RegisterComponent } from '../components/pages/account/register/register.component';
import { PasswordComponent } from '../components/pages/account/password/password.component';

//mapeamento das rotas de cada componente
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'acessar-conta'},
  {path: 'acessar-conta', component: LoginComponent},
  {path: 'criar-conta', component: RegisterComponent},
  {path: 'recuperar-senha', component: PasswordComponent}
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
