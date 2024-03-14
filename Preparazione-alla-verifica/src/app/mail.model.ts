export class Email{
    destinatario: string;
    oggetto: string;
    corpo: string;

    constructor(destinatario: string, oggetto: string, corpo: string){
        this.destinatario = destinatario
        this.oggetto = oggetto
        this.corpo = corpo
    }
}