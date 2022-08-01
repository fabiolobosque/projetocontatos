import { Injectable } from "@angular/core";
import { Usuario } from "../models/usuario.model";
import { Auth } from "../models/auth.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class UsuarioService{

    // construtor

    constructor(
        // declarando e inicializando HttpClient
        private httpClient: HttpClient
    ){
    }

    //método para executar a chamada de cadastro de usuário da API
    postRegister(data: any) : Observable<Usuario>{
        return this.httpClient.post<Usuario>(`${environment.apiContatos}/register`, data)
    }

    //método para executar a chamada de cadastro de usuário da API
    postLogin(data: any) : Observable<Auth>{
        return this.httpClient.post<Auth>(`${environment.apiContatos}/login`, data)
    }

}