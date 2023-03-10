import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ListboxModule } from 'primeng/listbox';

import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';


@NgModule({
  declarations: [
    //Components
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,
    //Pipes
    MayusculasPipe,
    VuelaPipe,
    ColorPipe,
    OrdenarPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
    ListboxModule
  ],
  exports: [
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent
  ]
})
export class VentasModule { }
