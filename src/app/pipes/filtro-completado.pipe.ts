import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false   //cada vez que se dispare el filtro se va a llamar y actualiza la página a pesar que esta fuera de la page donde se usa
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true): Lista[] {
    return listas.filter( lista => lista.terminada === completada );
  }

}
