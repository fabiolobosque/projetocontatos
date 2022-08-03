import { Injectable } from "@angular/core";
import { AuthHelper } from "../helpers/auth-helper";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from "rxjs";
import { NgIfContext } from "@angular/common";

@Injectable({
    providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor{
    constructor(
        private authHelper: AuthHelper
    ){

    }

    //método para implementar o interceptador
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        //verificar se a requisição que o httpCliente está fazendo para API é para o endpoint /api/cnotatos

        if(req.url.includes("/api/contatos")){
            var auth = this.authHelper.getAuthData();

            req = req.clone({
                setHeaders: {Authorization: `Bearer ${auth?.accessToken}`}
            })
        }
        return next.handle(req);

    }

}