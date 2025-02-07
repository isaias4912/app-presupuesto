import { Injectable } from '@angular/core';
import { Ingreso } from './ingreso.model';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {
  ingreso: Ingreso[]=[
    new Ingreso('Salario',4000),
    new Ingreso('Venta de coche',500)
  ];

  eliminar(ingreso:Ingreso){
    const indice:number=this.ingreso.indexOf(ingreso);
    this.ingreso.splice(indice,1)


  }




}
