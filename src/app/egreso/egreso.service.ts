import { Injectable } from '@angular/core';
import { Egreso } from './egreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {
egreso:Egreso[]=[
  new Egreso('Renta Dto',800),
  new Egreso('Ropa',200)
];

eliminar(egreso:Egreso){
  const indice:number=this.egreso.indexOf(egreso);
  this.egreso.splice(indice,1);
}
}
