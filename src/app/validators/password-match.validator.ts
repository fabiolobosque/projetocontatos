import { AbstractControl } from "@angular/forms";

export class PasswordMatchValidator {

    //método para executar a validação
    static MatchPassword(abstractControl: AbstractControl) {

        //capturar os campos do formulário que serão validados
        let senha = abstractControl.get('senha')?.value;
        let senhaConfirmacao = abstractControl
                               .get('confirmarSenha')?.value;

        //verificar se os valores são diferentes
        if (senha != senhaConfirmacao) {

            //gerar um erro de validação no campo 'senhaConfirmacao'
            abstractControl.get('confirmarSenha')?.setErrors({

                //nome do erro que será gerado
                matchpassword: true
            })
        }

        return null;
    }
}