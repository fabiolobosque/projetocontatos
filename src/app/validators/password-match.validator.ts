import { AbstractControl } from "@angular/forms";

export class PasswordMatchValidator {

    //método para executar a validação
    static MatchPassword(abstractControl: AbstractControl){

        //capturar os campos do formulário que serão validados
        let senha = abstractControl.get('senha')?.value;
        let confirmarSenha = abstractControl.get('confirmarSenha')?.value;

        if(confirmarSenha.length > 0 && senha != confirmarSenha){
            //gerar um erro de validação no campo 'confirmarSenha
            abstractControl.get('confirmarSenha')?.setErrors({
                //nome do erro que será gerado
                matchpassword: true
            })
        }

        return null;
    }
}