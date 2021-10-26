import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{ titulo }}</h1>

    <h3>La base es {{ base }} aumenta de 5 en 5 </h3>
    <button (click)="Acumular(+base)"> +{{ base }}</button>
    
    
    <span>{{numero}}</span>
    
    <button (click)="Acumular(-base)"> -{{ base }}</button>

    `

})
export class ContadorComponent {
    titulo: string = 'Hola Mundo';
    numero: number = 10;

    base: number = 5;

    Acumular(valor: number) {
        this.numero += valor;
    }
}