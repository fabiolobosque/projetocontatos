import { Injectable } from "@angular/core";
import { Auth } from "../models/auth.model";

@Injectable({
    providedIn: 'root'
})

export class AuthHelper{

    //função para gravar os dados do usuário autenticado
    //na local storage do navegador

    signIn(auth: Auth): void{
        //serialziar para JSON. Local storage so aceita string
        var jsonAuth = JSON.stringify(auth);
        //após converter para JSON vamos gravar na local storage

        localStorage.setItem("auth_data", jsonAuth)
    }

    //função para ler os dados do usuário autenticado na local storage e retornar como objeto
    getAuthData(): Auth | null {
        //Ler conteudo gravado na local storage
        var jsonAuth = localStorage.getItem("auth_data");

        //verificar se valor não é vazio
        if (jsonAuth != null){
            var auth = JSON.parse(jsonAuth) as Auth;
            return auth;
        }
        else{
            return null;
        }
    }

    //função para apagar o conteudo gravado na local storage
    signOut(): void{
        //Apagar dados da localStorage
        localStorage.removeItem("auth_data");
    }
}