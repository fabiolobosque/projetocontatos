/* 
    Modelo de dados para login
*/    

export class Auth{
    
    //atributos
    idUsuario: string = '';
    nome: string = '';
    email: string = '';
    accessToken: String = '';
    createdAt: Date | null = null;
    expiration: Date | null = null
}