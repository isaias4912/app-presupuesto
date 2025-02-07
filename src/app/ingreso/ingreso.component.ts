import { Component } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})
export class IngresoComponent {

  ingresos:Ingreso[]=[];

  constructor(private ingresoServicio:IngresoService){
  this.ingresos=ingresoServicio.ingreso;   

  }
  eliminarIngreso(ingreso:Ingreso){
    this.ingresoServicio.eliminar(ingreso)
  }

}
