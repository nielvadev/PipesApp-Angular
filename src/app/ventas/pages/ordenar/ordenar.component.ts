import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

    texto : string = 'Hola Mundo';
    indice : number = 0;

    ordenarPor: string = '';

    cambiar () {
        return (this.indice == 2) ? this.indice = 0 : this.indice += 1;
    }

    heroes : Heroe[] = [
        {
            nombre: 'Superman',
            vuela : true,
            color : Color.azul
        },
        {
            nombre: 'Batman',
            vuela : false,
            color : Color.negro
        },
        {
            nombre: 'Robin',
            vuela : false,
            color : Color.verde
        },
        {
            nombre: 'Linterna Verde',
            vuela : true,
            color : Color.verde
        },
        {
            nombre: 'Aquaman',
            vuela : false,
            color : Color.azul
        },
        {
            nombre: 'Flash',
            vuela : false,
            color : Color.rojo
        },
        {
            nombre: 'Wolverine',
            vuela : false,
            color : Color.amarillo
        },
        {
            nombre: 'Spiderman',
            vuela : false,
            color : Color.rojo
        },
        {
            nombre: 'Ironman',
            vuela : true,
            color : Color.rojo
        }
    ];

    cambiarOrden (valor: string) {
        this.ordenarPor = valor;
    }
    
}
