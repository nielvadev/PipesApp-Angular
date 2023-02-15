import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
    
    //i18nSelect
    nombre : string = 'Juan Daniel';
    genero : string = 'masculino';

    
    invitacionMapa = {
        'masculino' : 'invitarlo',
        'femenino' : 'invitarla'
    }
    
    //i18nPlural
    numClientes: number = 1 ;
    clientesMapa = {
        '=0'    : 'no tenemos clientes esperando',
        '=1'    : 'tenemos 1 cliente esperando',
        'other' : 'tenemos # clientes esperando'
    }
    
    cambiarGenero() : void {       
        if (this.nombre === 'Juan Daniel') {
            this.nombre = 'Elizabeth';
            this.genero = 'femenino'
        } else {
            this.nombre = 'Juan Daniel';
            this.genero = 'masculino';
        }
    }

    masUnCliente() : void {
        this.numClientes += 1;
    }
    menosUnCliente() : void {
        ( this.numClientes == 0 ? this.numClientes = 0 : this.numClientes -= 1 );
        
    }

    //SlicePipe
    clientes : string[] = ['Pedro','Melisa','Juan','Maria','Raúl'];
    
    //JsonPipe
    heroes = [
        {
            nombre: 'Superman',
            vuela : true
        },
        {
            nombre: 'Spiderman',
            vuela : false
        },
        {
            nombre: 'AntMan',
            vuela : false
        },
        {
            nombre: 'IronMan',
            vuela : true
        },
        
    ]
    
    //KeyValue Pipe
    persona = {
        nombre   : 'Juan Daniel',
        edad     : 27,
        direccion: 'Dosquebradas, Risaralda',
        enfoque  : 'FrontEnd'
    }

    //Async Pipe
    valorInterval : number = 1;
    miObservable = interval(1000); //0,1,2,3,4,5,6...
    
    valorPromesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( 'Promesa Resuelta' );
        },1000);
    });
    
    cambiarValorInterval( valorIn : number) : void {
        this.valorInterval = valorIn;
        this.miObservable = interval(1000);
        const espera = new Promise((resolve, reject) => {
            setTimeout(() => {
                this.valorPromesa = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve( 'Promesa Resuelta' );
                    },valorIn * 1000);
                });
                resolve( 'Promesa Resuelta' );
            },1000);
        });

    }
    
}
