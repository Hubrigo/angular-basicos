import { Component } from "@angular/core";





@Component({
    selector: 'app-Heroe',
    templateUrl: './heroe.component.html'

})
export class HeroeComponent {

    nombre: string = 'Jesus';
    edad: number = 2021;

    get nombreCapitalizado() {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'Goku';
    }


    cambiarEdad(): void {
        this.edad = 21;
    }
}