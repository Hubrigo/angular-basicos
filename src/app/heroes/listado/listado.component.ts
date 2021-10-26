import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Goku', 'Vegueta', 'Picoro', 'Luchimbo'];


  heroeBorrado: string = '';

  borrarHerroe() {

    console.log('Borrar');
    this.heroeBorrado = this.heroes.shift() || "";
    

  }

}
