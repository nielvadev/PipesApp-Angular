import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/ventas.interfaces';

@Pipe({
    name: 'color'
})
export class ColorPipe implements PipeTransform {

    static azul: any;
    static negro: any;
    static rojo: any;
    static verde: any;
    static amarillo: any;
    
    transform(value: Color): string {
        switch (value) {
            case Color.azul:
                return 'Azul';
            case Color.negro:
                return 'Negro';
            case Color.rojo:
                return 'Rojo';
            case Color.verde:
                return 'Verde';
            case Color.amarillo:
                return 'Amarillo';
            default:
                return 'Sin color';
        }
    }
}