import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform(value: string, indice: number ): string {
        if (indice == 0) {
            return value.toUpperCase();
        } else if (indice == 1) {
            return value.toLowerCase();
        } else {
            return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        }
    }
}
