import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Contato } from "../models/contato.models";

@Injectable({
    providedIn: 'root'
})

export class ContatoService{

    // construtor

    constructor(
        // declarando e inicializando HttpClient
        private httpClient: HttpClient
    ){
    }

    //cadastrar contato
    postContato(data: any) : Observable<Contato>{
        return this.httpClient.post<Contato>(`${environment.apiContatos}/contatos`, data);
    }

    //atualizar contato
    putContato(data: any) : Observable<Contato>{
        return this.httpClient.put<Contato>(`${environment.apiContatos}/contatos`, data);
    }

    //deletar contato
    deleteContato(id: string) : Observable<Contato>{
        return this.httpClient.delete<Contato>(`${environment.apiContatos}/contatos/${id}`);
    }

    //consultar todos os contatos
    getContatos() : Observable<Contato[]>{
        return this.httpClient.get<Contato[]>(`${environment.apiContatos}/contatos`);
    }

    //consultar um contato através do ID
    getContatoPorId(id: string) : Observable<Contato>{
        return this.httpClient.get<Contato>(`${environment.apiContatos}/contatos/${id}`);
    }
    

}