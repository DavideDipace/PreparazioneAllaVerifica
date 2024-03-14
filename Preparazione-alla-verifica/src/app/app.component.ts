import { Component } from '@angular/core';
import { Email } from './mail.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Preparazione-alla-verifica';

  Vettore: Email[] = [];
  NuovaMail(destinatario: HTMLInputElement, oggetto: HTMLInputElement, corpo: HTMLInputElement): boolean{
    this.Vettore.push(new Email(destinatario.value, oggetto.value, corpo.value))
    console.log(this.Vettore)
    return false
  }
}