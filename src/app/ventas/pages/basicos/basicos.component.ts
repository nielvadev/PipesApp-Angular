import { Component } from '@angular/core';


interface Basicos {
    input : string;
}

interface Fechas {
    name  : string,
    code  : string 
}


@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

    basicos: Basicos = {
        input : 'TexTo DE EjeMplo'
    }

    fecha: Date = new Date(); //Fecha al día de hoy.
    
    newCourse : string = '';
    allCourses : string[] = [];
    
    
}
