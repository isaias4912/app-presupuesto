import { Component, Input } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-egreso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './egreso.component.html',
  styleUrl: './egreso.component.css'
})
export class EgresoComponent {

  egresos: Egreso[]=[];
  @Input()ingresoTotal!:number;

  constructor(private egresoService:EgresoService){
    this.egresos=this.egresoService.egreso;
  }

   eliminarEgreso(egreso:Egreso){
    this.egresoService.eliminar(egreso)
   }

   calcularPorcentaje(egreso:Egreso){
    return egreso.valor/this.ingresoTotal;

   }



}
